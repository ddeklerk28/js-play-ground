interface ScriptModule {
  default: () => void;
  description?: string;
}

interface ScriptInfo {
  name: string;
  filename: string;
  module?: ScriptModule;
}

class AlgorithmPlayground {
  private scripts: ScriptInfo[] = [];
  private activeScript: string | null = null;
  private tabNavElement: HTMLElement;
  private tabContentElement: HTMLElement;

  constructor() {
    this.tabNavElement = document.getElementById('tabNav')!;
    this.tabContentElement = document.getElementById('tabContent')!;
    this.init();
  }

  private async init() {
    try {
      await this.loadScripts();
      this.renderTabs();
      if (this.scripts.length > 0) {
        this.switchToTab(this.scripts[0].filename);
      }
    } catch (error) {
      this.showError('Failed to initialize playground', error);
    }
  }

  private async loadScripts() {
    // Manually define available scripts for now
    // In a real project, you could use a build-time script to generate this list
    const scriptFiles = [
        'key-trends-to-ten',
      'bubble-sort',
      'binary-search',
      'fibonacci',
      'quicksort'
    ];

    for (const filename of scriptFiles) {
      const name = this.formatScriptName(filename);
      this.scripts.push({
        name,
        filename,
      });
    }

    this.scripts.sort((a, b) => a.name.localeCompare(b.name));
  }

  private formatScriptName(filename: string): string {
    return filename
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  private renderTabs() {
    if (this.scripts.length === 0) {
      this.tabNavElement.innerHTML = '<div class="loading">No scripts found in /scripts folder</div>';
      this.tabContentElement.innerHTML = `
        <div class="script-content active">
          <p>Create TypeScript files in the <code>src/scripts/</code> folder to get started!</p>
          <p>Each file should export a default function that contains your algorithm implementation.</p>
        </div>
      `;
      return;
    }

    const tabButtons = this.scripts.map(script => `
      <button
        class="tab-button"
        data-script="${script.filename}"
        onclick="playground.switchToTab('${script.filename}')"
      >
        ${script.name}
      </button>
    `).join('');

    this.tabNavElement.innerHTML = tabButtons;

    const tabContents = this.scripts.map(script => `
      <div class="script-content" id="content-${script.filename}">
        <button class="run-button" onclick="playground.runScript('${script.filename}')">
          🚀 Run ${script.name}
        </button>
        <div class="output-section">
          <div class="output-title">Output:</div>
          <div class="output-content" id="output-${script.filename}">
            Click "Run" to execute this script
          </div>
        </div>
      </div>
    `).join('');

    this.tabContentElement.innerHTML = tabContents;
  }

  public switchToTab(scriptFilename: string) {
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });

    document.querySelectorAll('.script-content').forEach(content => {
      content.classList.remove('active');
    });

    const activeButton = document.querySelector(`[data-script="${scriptFilename}"]`);
    const activeContent = document.getElementById(`content-${scriptFilename}`);

    if (activeButton && activeContent) {
      activeButton.classList.add('active');
      activeContent.classList.add('active');
      this.activeScript = scriptFilename;
    }
  }

  public async runScript(scriptFilename: string) {
    const outputElement = document.getElementById(`output-${scriptFilename}`);
    if (!outputElement) return;

    outputElement.textContent = 'Running...';
    outputElement.className = 'output-content loading';

    try {
      const scriptInfo = this.scripts.find(s => s.filename === scriptFilename);
      if (!scriptInfo) {
        throw new Error('Script not found');
      }

      if (!scriptInfo.module) {
        // Dynamic import the script module
        try {
          scriptInfo.module = await import(`./scripts/${scriptFilename}.ts`) as ScriptModule;
        } catch (error) {
          throw new Error(`Failed to load module: ${scriptFilename}.ts - ${error}`);
        }
      }

      const originalConsole = this.setupConsoleCapture(outputElement);

      try {
        if (typeof scriptInfo.module.default === 'function') {
          await scriptInfo.module.default();
        } else {
          throw new Error('Script must export a default function');
        }
      } finally {
        this.restoreConsole(originalConsole);
      }

      outputElement.className = 'output-content';
    } catch (error) {
      this.showError(`Error running ${scriptFilename}`, error, outputElement);
    }
  }

  private setupConsoleCapture(outputElement: HTMLElement): typeof console {
    const originalConsole = { ...console };
    let output = '';

    const captureOutput = (type: string, ...args: any[]) => {
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');

      output += `[${type.toUpperCase()}] ${message}\n`;
      outputElement.textContent = output;

      originalConsole[type as keyof typeof console](...args);
    };

    console.log = (...args) => captureOutput('log', ...args);
    console.info = (...args) => captureOutput('info', ...args);
    console.warn = (...args) => captureOutput('warn', ...args);
    console.error = (...args) => captureOutput('error', ...args);

    return originalConsole;
  }

  private restoreConsole(originalConsole: typeof console) {
    Object.assign(console, originalConsole);
  }

  private showError(message: string, error: any, outputElement?: HTMLElement) {
    const errorMessage = `${message}: ${error.message || error}`;
    console.error(errorMessage);

    if (outputElement) {
      outputElement.textContent = errorMessage;
      outputElement.className = 'output-content error';
    } else {
      this.tabContentElement.innerHTML = `
        <div class="script-content active error">
          <h3>Error</h3>
          <p>${errorMessage}</p>
        </div>
      `;
    }
  }
}

declare global {
  interface Window {
    playground: AlgorithmPlayground;
  }
}

const playground = new AlgorithmPlayground();
window.playground = playground;