import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';
import 'react-table/react-table.css';
import moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Customerlist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings', {method: 'GET'})
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const columns = [
        {
            Header: 'First name',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Last name',
            accessor: 'customer.lastname'
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => (moment(row.value).format('YYYY.DD.MM'))
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links.1.href',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}