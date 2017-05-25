import React from 'react';
import { observer, inject } from 'mobx-react';

import {
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableRowColumn,
  TableHeaderColumn,
} from 'material-ui/Table';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
} from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';

import FilterUser from './FilterUser';
import AddUser from './AddUser';

const User = inject('store')(observer(({ store }) => {
  const {
    query,
    search,
    addUser,
    filterUser,
    deleteUser,
    clearSearch,
   } = store;

  const handleDelete = (id) => {
    deleteUser(id)
  };

  const showCheckBox = false;

  const renderedUsers = filterUser.map(({ id, name, company, phone }) => {
    return (
      <TableRow key={id}>
        <TableRowColumn>{ name }</TableRowColumn>
        <TableRowColumn>{ company }</TableRowColumn>
        <TableRowColumn>{ phone }</TableRowColumn>
        <TableRowColumn>{ id }</TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            label="delete"
            secondary={true}
            onTouchTap={() => handleDelete(id)} />
        </TableRowColumn>
      </TableRow>
    )
  });

  return (
    <div>
      <Toolbar>
        <ToolbarGroup>
          <FilterUser
            query={query}
            search={search}
            clearSearch={clearSearch} />
        </ToolbarGroup>
        <ToolbarGroup>
          <AddUser addUser={addUser}/>
        </ToolbarGroup>
      </Toolbar>
      <Table selectable={false}>
        <TableHeader
          adjustForCheckbox={showCheckBox}
          displaySelectAll={showCheckBox}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Company</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={showCheckBox}>
          { renderedUsers }
        </TableBody>
      </Table>
    </div>
  )
}));

export default User;
