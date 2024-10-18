import React, { useState, useEffect } from 'react';
import { Button, Input, Popconfirm, Table, message, Select, Form, Divider, Card } from 'antd';
import axios from 'axios';
import './styles.css';
import { Link } from 'react-router-dom';

const { Option } = Select

type Record = {
    id: number;
    name: string;
    title: string;
    company: string;
    Experience: number;
    salary: number
}


const DynamicForm: React.FC = () => {
    // const [form] = Form.useForm();
    const [formData, setformData] = useState<any>({});
    const [data, setData] = useState<Record[]>();
    const [dropdown, setdropdown] = useState<any[]>([]);


    useEffect(() => {
        showAll();
    }, []);

    useEffect(() => {
        axios.post('http://localhost:5566/table/showAll')
            .then(response => {
                console.log('ResponseData:', response.data)
                setdropdown(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const onFinish = () => {
        const reqFields = ['id', 'name', 'title', 'company', 'Experience', 'salary']
        const isValid = reqFields.every(field => formData[field])
        if (!isValid) {
            message.error("plz fill all fields");
            return;
        }
        axios.post("http://localhost:5566/Ite/create", formData)
            .then(response => {
                console.log('Response:', response.data,);
                setData([...data, formData])
                window.location.reload();
                setformData({})
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const showAll = () => {
        axios.post("http://localhost:5566/Ite/readall")
            .then(response => {
                setData(response.data)
                console.log('Response:', response.data, '222');
            })
            .catch(error => {
                console.log('error:', error);
            });
    }

    const deleteHandler = (id: Record["id"]) => {
        axios.post(`http://localhost:5566/Ite/delete/${id}`)
            .then(response => {
                console.log('Response:', response.data);
                setData(data.filter(item => item.id !== id));
                message.success('record deleted');
            })
            .catch(error => {
                console.error('Error:', error);
                message.error('failed to delete record')
            });
    }


    const updateHandler = (record: Record) => {
        setformData({ ...record });
    };

    const handleTitleChange = (value: Record) => {
        setformData({
            ...formData,
            title: value
        })
    }

    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    }


    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'Id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: ' Experience',
            dataIndex: 'Experience',
            key: 'experience',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Actions',
            key: "action",
            width: 250,
            render: (record: Record) => (
                <div>
                    <Popconfirm title="you sure u wanna delete this?"
                        onConfirm={() => deleteHandler(record.id)}
                        okText="yes"
                        cancelText="no">
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Divider type='vertical' />
                    <Button onClick={() => updateHandler(record)}>Update</Button>
                </div>
            ),
        },
    ];


    return (
        <>
            <div style={{ display: 'flex' }}>
                <Form className="FormContainer" style={{ width: '30%', marginLeft: '70px', height: '500px', marginTop: '20px' }}>
                    <Card style={{ height: '640px', backgroundColor: 'darkgray', boxShadow: '2px 2px 15px black' }}>
                        <div style={{ color: '#FFF4A3', fontWeight: 'bold' }}>
                            <div style={{ color: '#C2571A', fontWeight: 'bolder', fontSize: '19px' }}>Add Employee Data</div>
                            <div><p>Id </p><Input name='id' placeholder='Enter Id' onChange={titleChange} value={formData.id || ''} /></div>
                            <div><p>Name </p><Input name='name' placeholder='Enter Name' onChange={titleChange} value={formData.name || ''} /></div>
                            <div>
                                <p>Title</p>
                                <Select
                                    placeholder='Select Your title'
                                    value={formData.title}
                                    style={{ width: '100%', height: '35px' }}
                                    onChange={handleTitleChange}>
                                    {dropdown.map((option: { id: number; title: string }) => (
                                        <Option key={option.id} value={option.title}>
                                            {option.title}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <div><p>Company </p><Input name='company' placeholder='Enter company' onChange={titleChange} value={formData.company || ''} /></div>
                            <div><p>Experience </p><Input name='Experience' placeholder='Enter Experience' onChange={titleChange} value={formData.Experience || ''} /></div>
                            <div><p>Salary</p><Input name='salary' placeholder='Enter salary' onChange={titleChange} value={formData.salary || ''} /></div>
                        </div>
                        <Button style={{ height: '20%', width: '30%', marginTop: '20px', background: 'linear-gradient(135deg, #6253e1, #04befe)' }} type='primary' onClick={onFinish}>Submit</Button>
                    </Card>
                </Form>

                <Card style={{ height: '400px', marginLeft: '50px', marginRight: '50px' }}>
                    <Table
                        dataSource={data}
                        columns={columns}
                    />
                </Card>
            </div>
            <Link to={"/title"} style={{ color: 'red', paddingLeft: '650px', paddingBottom: '100px' }}>Click Here to go to Titles Page</Link>
        </>
    );
};

export default DynamicForm
