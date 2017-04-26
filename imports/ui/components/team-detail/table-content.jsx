import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import { Icon, Popover, Form, Input, Select, Modal, Button, Row, Col } from 'antd';
import update from 'react-addons-update';

import { TableColumn } from '../../../api/fake-table';
import FakeObjectDataListStore from '../../../api/FakeObjectDataListStore';
import ExampleImage from '../../../api/ExampleImage';

const FormItem = Form.Item;
const Option = Select.Option;



export default class ResizeExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableWidth: () => {
                let sum = 0;
                for (let i = 0; i < this.state.tableColumn.length ; i++){
                    sum = sum + this.state.tableColumn[i].width;
                }
                return sum;
            },
            tableColumn: TableColumn(),
            visiblePopoverCreateColumn: false,
            visibleModal:false,
            componentNextForm: (
                <FormItem style={{width:200}} help="A single line of text. You can prefill each new cell with a default value ">
                    <Input placeholder="Default text" name="default" />
                </FormItem>
            ),
            dataList: new FakeObjectDataListStore(50)
        };

        this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
        this.handleChangeTypeColumn = this.handleChangeTypeColumn.bind(this);
        this.handleVisibleChangePopover = this.handleVisibleChangePopover.bind(this);
    }

    _onColumnResizeEndCallback(newColumnWidth, columnKey) {
        let newWidth = this.state.tableColumn;
        this.state.tableColumn.map((column, index)=>{
            if (column.key == columnKey){
                newWidth = update (this.state.tableColumn, {
                    [index]: {width: {$set: newColumnWidth}}
                })
            }
        })
        this.setState({tableColumn:newWidth});
    }

    handleChangeTypeColumn(value) {
        this.setState({ visiblePopoverCreateColumn: true });
        switch (value) {
            case "longText" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="A long text field that can span multiple lines. "/> })
                break;
            case "attachments" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="Attachments allow you to add images, documents, or other files which can then be viewed or download. "/> })
                break;
            case "checkbox" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="A single checkbox that can be checked or unchecked. "/> })
                break;
            case "multipleSelect" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="Multiple selected allows you to select one or more predefined options listed below. "/>})
                break;
            case "singleSelect" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="Single selected allows you to select a single predefined options listed below from a dropdown. "/>})
                break;
            case "collaborator" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="A collaborator field lets you add collaborators to your records. Collaborators can optionally be notified when they're add. "/>})
                break;
            case "date" :
                this.setState({componentNextForm:<FormItem style={{width:200}} help="Enter a date (e.g. 11/12/2017) or pick one form a calendar. "/>})
                break;
            default :
                this.setState({componentNextForm:(
                    <FormItem style={{width:200}} help="A single line of text. You can prefill each new cell with a default value ">
                        <Input placeholder="Default text" name="default" />
                    </FormItem>
                )})
                break;
        }
    }

    formAddColumn() {
        return (
            <Form>
                <FormItem style={{width:200}}>
                    <Input placeholder="Title" onChange={()=>{}} autoFocus={true} name="title" value={this.state.tableColumn[this.state.tableColumn.length-1].title}/>
                </FormItem>
                <FormItem style={{width:200}}>
                    <Select
                        style={{ width: 200 }}
                        placeholder="Select type field"
                        optionFilterProp="children"
                        defaultValue="singleLineText"
                        onChange={this.handleChangeTypeColumn}
                        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        <Option value="singleLineText"><Icon type="minus" /> Single line text</Option>
                        <Option value="longText"><Icon type="menu-fold" /> Long text</Option>
                        <Option value="attachments"><Icon type="file" /> Attachments</Option>
                        <Option value="checkbox"><Icon type="check-square-o" /> Checkbox</Option>
                        <Option value="multipleSelect"><Icon type="bars" /> Multiple Select</Option>
                        <Option value="singleSelect"><Icon type="play-circle" /> Single Select</Option>
                        <Option value="collaborator"><Icon type="user" /> Collaborator</Option>
                        <Option value="date"><Icon type="calendar" /> Date</Option>
                    </Select>
                </FormItem>
                {this.state.componentNextForm}
                <Row>
                    <Col span={12}>
                        <Button key="back" size="large" onClick={()=>{this.setState({ visiblePopoverCreateColumn: false });}}>Cancel</Button>
                    </Col>
                    <Col span={12}>
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={()=>{this.setState({ visiblePopoverCreateColumn: false });}}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        )
    }

    onClickAddColumn() {
        const nextColumn = this.state.tableColumn.length+1
        const column = {
            key : 'field'+ nextColumn,
            title : 'Field '+nextColumn,
            width : 150,
            fixed : false,
            type : 'singleText'
        }
        this.state.tableColumn.push(column)
        this.setState({tableColumn:this.state.tableColumn});
    }

    handleVisibleChangePopover(visible) {
        this.setState({ visiblePopoverCreateColumn: visible });
    }

    showModal(index) {
        const {dataList} = this.state;
        this.setState({
            visibleModal: true,
            name: dataList.getObjectAt(index)['lastName'],
            email: dataList.getObjectAt(index)['email'],
            attachments: dataList.getObjectAt(index)['avatar'],
            notes: dataList.getObjectAt(index)['street'],
            words: dataList.getObjectAt(index)['words'],
            date: dataList.getObjectAt(index)['date'].toLocaleString()
        });
    }

    handleOk(e) {
        console.log(e);
        this.setState({
            visibleModal: false,
        });
    }

    handleCancel(e) {
        console.log(e);
        this.setState({
            visibleModal: false,
        });
    }

    render() {
        var {dataList} = this.state;

        const Counter = ({rowIndex, ...props}) => (
            <Cell {...props} onClick={()=>this.showModal(rowIndex)}>
                {rowIndex+1}
            </Cell>
        );

        const DateCell = ({rowIndex, data, col, ...props}) => (
            <Cell {...props}>
                {data.getObjectAt(rowIndex)[col].toLocaleString()}
            </Cell>
        );

        const ImageCell = ({rowIndex, data, col, ...props}) => (
            <ExampleImage
                src={data.getObjectAt(rowIndex)[col]}
            />
        );

        const TextCell = ({rowIndex, data, col, ...props}) => (
            <Cell {...props}>
                {data.getObjectAt(rowIndex)[col]}
            </Cell>
        );

        const LinkCell = ({rowIndex, data, col, ...props}) => (
            <Cell {...props}>
                <a href="#">{data.getObjectAt(rowIndex)[col]}</a>
            </Cell>
        );

        return (
            <div>
                <Table
                    rowHeight={50}
                    headerHeight={30}
                    rowsCount={dataList.getSize()}
                    onColumnResizeEndCallback={this._onColumnResizeEndCallback}
                    isColumnResizing={false}
                    width={this.state.tableWidth()+100}
                    height={550}
                    overflowX="hidden"
                    {...this.props}>
                    {
                        this.state.tableColumn.map((column,key) => (
                            <Column
                                key={key}
                                columnKey={column.key}
                                header={<Cell>{column.title}</Cell>}
                                fixed={column.fixed}
                                width={column.width}
                                isResizable={true}
                                cell={column.key == "name" ? <TextCell data={dataList} col="lastName" /> : column.key == "notes" ? <TextCell data={dataList} col="street" /> : column.key == "attachments" ? <ImageCell data={dataList} col="avatar" /> : column.key == "date" ? <DateCell data={dataList} col="date"/> : column.key == "words" ? <TextCell data={dataList} col="words"/> : column.key == "email" ? <LinkCell data={dataList} col="email" /> : <Counter />}
                            />
                        ))
                    }
                    <Column
                        columnKey="add"
                        header={
                            <Cell>
                                <Popover
                                    placement="leftTop"
                                    visible={this.state.visiblePopoverCreateColumn}
                                    content={this.formAddColumn()}
                                    trigger="click"
                                    onVisibleChange={this.handleVisibleChangePopover}>
                                    <Icon onClick={()=>this.onClickAddColumn()} type="plus-circle-o" />
                                </Popover>
                            </Cell>
                        }
                        width={100}
                        isResizable={false}
                        align="center"
                    />
                </Table>

                <Modal
                    title={this.state.name}
                    visible={this.state.visibleModal}
                    onOk={()=>this.handleOk()}
                    onCancel={()=>this.handleCancel()}
                    footer={[
                        <Button key="back" size="large" onClick={()=>this.handleCancel()}>Cancel</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={()=>this.handleOk()}>
                            Submit
                        </Button>,
                    ]}>
                    <Form>
                        <FormItem
                            label="Name">
                            <Input placeholder="Name" name="name" value={this.state.name} />
                        </FormItem>
                        <FormItem
                            label="Email">
                            <Input placeholder="Email" name="email" value={this.state.email} />
                        </FormItem>
                        <FormItem
                            label="Attachments">
                            <div style={{background : 'url(' + this.state.attachments + ')', width: '100px', height: '100px', display: 'inline-block', backgroundSize: '100%'}} />
                        </FormItem>
                        <FormItem
                            label="Notes">
                            <Input placeholder="Notes" name="notes" value={this.state.notes} />
                        </FormItem>
                        <FormItem
                            label="Words">
                            <Input placeholder="Words" name="words" value={this.state.words} />
                        </FormItem>
                        <FormItem
                            label="Date">
                            <Input placeholder="Date" name="date" value={this.state.date} />
                        </FormItem>
                    </Form>

                </Modal>
            </div>

        );
    }
}
