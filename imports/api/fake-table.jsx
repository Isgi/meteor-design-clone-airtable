import React from 'react';

export const TableColumn = () => {
    const arrayColumn = [
        {
            key : 'id',
            title : '',
            width : 30,
            fixed : true,
            type : 'singleText'
        },
        {
            key : 'name',
            title : 'Name',
            width : 150,
            fixed : true,
            type : 'singleText'
        },
        {
            key : 'email',
            title : 'Email',
            width : 200,
            fixed : false,
            type : 'singleText'
        },
        {
            key : 'attachments',
            title : 'Attachments',
            width : 150,
            fixed : false,
            type : 'singleText'
        },
        {
            key : 'notes',
            title : 'Notes',
            width : 150,
            fixed : false,
            type : 'singleText'
        },
        {
            key : 'words',
            title : 'Words',
            width : 150,
            fixed : false,
            type : 'singleText'
        },
        {
            key : 'date',
            title : 'Date',
            width : 150,
            fixed : false,
            type : 'singleText'
        }

    ]
    return arrayColumn;
}