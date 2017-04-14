import React, { Component } from 'react';
import { Tabs } from 'antd';

import TableContent from './table-content';
const TabPane = Tabs.TabPane;

export default class TableTabs extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Table 1', content: <TableContent/>, key: '1', closable: false },
            { title: 'Table 2', content: <TableContent/>, key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange(activeKey) {
        this.setState({ activeKey });
    }
    onEdit(targetKey, action) {
        this[action](targetKey);
    }
    add() {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Table', content: 'Content of new Table', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove(targetKey) {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <Tabs
                onChange={this.onChange.bind(this)}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit.bind(this)}>
                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
            </Tabs>
        )
    }
}