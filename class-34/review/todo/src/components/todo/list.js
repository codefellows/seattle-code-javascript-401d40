import React from 'react';
import { Toast, Badge, Pagination } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings/Settings.js';

export default function TodoList(props) {

  const context = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(context.startingPage);

  const styles = {
    pill: { cursor: 'pointer' },
  };

  const sortedList = props.list.sort((first, second) => {
    if (second.difficulty > first.difficulty) { return 1; }
    else if (first.difficulty > second.difficulty) { return -1; }
    else { return 0; }
  });

  const filteredList = sortedList.filter(item => !item.complete);
  const filteredTrueList = sortedList.filter(item => item.complete);
  const oneListToRuleThemAll = [...filteredList, ...filteredTrueList];

  const numberOfPages = Math.ceil(oneListToRuleThemAll.length / context.itemsPerPage);

  const indexOfLastPost = currentPage * context.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - context.itemsPerPage;
  const currentPosts = oneListToRuleThemAll.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const active = currentPage;
  for (let number = 1; number <= numberOfPages; number++) {
    pageNumbers.push(
      <Pagination.Item key={number} active={number === active} onClick={() => paginate(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      {currentPosts.map(item => (
        <Toast key={item._id} onClose={() => props.handleDelete(item._id)}>
          <Toast.Header>
            <Badge
              pill
              style={styles.pill}
              variant={item.complete ? 'danger' : 'success'}
              onClick={() => props.handleComplete(item._id)}
            >
              {!item.complete ? 'Pending' : 'Complete'}
            </Badge>
            <strong className="mr-auto">{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body>
            {item.text}
            difficulty:{item.difficulty}
          </Toast.Body>
        </Toast>
      ))}
      <Pagination>
        {pageNumbers}
      </Pagination>
    </>
  );
}
