import { createItem } from '@/view';

import { setup as setupComponent } from './components';

// import './index.scss';

// -- private variables ----------------------------------------------------------------------------

let _btnExportDrawing: HTMLButtonElement;
let _btnLoadProject: HTMLInputElement;
let _btnSaveProject: HTMLButtonElement;
let _btnRun: HTMLButtonElement;
let _btnStop: HTMLButtonElement;
let _btnReset: HTMLButtonElement;

// -- public functions -----------------------------------------------------------------------------

/**
 * Sets up the DOM.
 */
export function setup(): Promise<void> {
    return new Promise((resolve) => {
        const menu = createItem({
            location: 'toolbar',
            type: 'container',
            position: 'cluster-b',
        });
        menu.id = 'menu';

        setupComponent(menu, {
            labels: {
                exportDrawing: 'Save mouse artwork as PNG',
                loadProject: 'Load Project',
                saveProject: 'Save project as HTML',
                run: 'run',
                stop: 'stop',
                reset: 'reset',
            },
        }).then(
            ({ btnExportDrawing, btnLoadProject, btnSaveProject, btnRun, btnReset, btnStop }) => {
                [
                    _btnExportDrawing,
                    _btnLoadProject,
                    _btnSaveProject,
                    _btnRun,
                    _btnStop,
                    _btnReset,
                ] = [btnExportDrawing, btnLoadProject, btnSaveProject, btnRun, btnStop, btnReset];
                resolve();
            },
        );
    });
}

/**
 * @returns DOM `exportDrawing`,`loadProject`,`saveProject`,`run`, `stop`, and `reset` buttons
 */
export function getButtons(): {
    exportDrawing: HTMLButtonElement;
    loadProject: HTMLInputElement;
    saveProject: HTMLButtonElement;
    run: HTMLButtonElement;
    stop: HTMLButtonElement;
    reset: HTMLButtonElement;
} {
    return {
        exportDrawing: _btnExportDrawing,
        loadProject: _btnLoadProject,
        saveProject: _btnSaveProject,
        run: _btnRun,
        stop: _btnStop,
        reset: _btnReset,
    };
}

export { updateState } from './components';
