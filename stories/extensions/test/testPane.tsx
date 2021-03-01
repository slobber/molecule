import * as React from 'react';
import {
    activityBarService,
    colorThemeService,
    editorService,
    panelService,
} from 'mo';
import { Button } from 'mo/components/button';
import { Select, Option } from 'mo/components/select';
import { IColorTheme } from 'mo/model/colorTheme';
import { IEditorTab } from 'mo/model';

export default class TestPane extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    onChangeTheme = (e, option) => {
        if (option && option.value) {
            console.log('onChangeTheme:', option.value);
            colorThemeService.applyTheme(option.value);
        }
    };

    renderColorThemes() {
        const colorThemes = colorThemeService.getThemes();
        const defaultTheme = colorThemeService.colorTheme;
        const options = colorThemes.map((theme: IColorTheme) => {
            return (
                <Option key={theme.id} value={theme.id}>
                    {theme.label}
                </Option>
            );
        });
        return (
            <Select
                defaultValue={defaultTheme.id}
                onSelect={this.onChangeTheme}
            >
                {options}
            </Select>
        );
    }

    render() {
        const addABar = function () {
            const id = Math.random() * 10 + 1;
            activityBarService.addBar({
                id: id + '',
                name: 'folder' + id,
                iconName: 'codicon-edit',
            });
        };

        const addPanel = function () {
            const id = Math.random() * 10 + 1;
            panelService.open({
                id: 'Pane' + id,
                name: 'Panel' + id,
                label: 'test',
                render: () => <h1>Test Pane</h1>,
            });
        };

        const showHidePanel = function () {
            panelService.showHide();
        };

        const newEditor = function () {
            const key = Math.random() * 10 + 1;
            const tabData: IEditorTab = {
                id: `${key}`,
                name: `editor.js`,
                modified: false,
                data: {
                    value: `hello javascript ${key}`,
                    path: 'desktop/molecule/editor1',
                    language: 'javascript',
                },
                breadcrumb: [{ id: `${key}`, name: 'editor.js' }],
            };
            console.log('open editor:', tabData);
            editorService.open(tabData);
        };

        const openCommand = function () {};
        return (
            <div>
                <div style={{ margin: '50px 20px' }}>
                    <Button onClick={addABar}>Add Bar</Button>
                    <Button onClick={newEditor}>New Editor</Button>
                    <Button onClick={openCommand}>Command Palette</Button>
                </div>
                <div style={{ margin: '50px 20px' }}>
                    <h1>Select a ColorTheme:</h1>
                    {this.renderColorThemes()}
                </div>
                <div style={{ margin: '50px 20px' }}>
                    <h2>Add a new Panel:</h2>
                    <Button onClick={addPanel}>Add Panel</Button>
                    <Button onClick={showHidePanel}>Show/Hide Panel</Button>
                </div>
            </div>
        );
    }
}