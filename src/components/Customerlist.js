import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Addtraining from './Addtraining';
import 'react-table/react-table.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const saveTraining = (training) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'Email address',
            accessor: 'email'
        },
        {
            Header: 'Phone number',
            accessor: 'phone'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            width: 130,
            accessor: 'links.2.href',
            Cell: row => <Addtraining saveTraining={saveTraining} customer={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links.1.href',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <Addcustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} data={customers} columns={columns} />
        </div>
    );
}