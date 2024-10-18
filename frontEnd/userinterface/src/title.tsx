import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Form, Input, Popconfirm, Table, message } from "antd";
import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";


type Storage = {
    id: number;
    title: string;
}


export const TitleNew: React.FC = () => {
    const [titles, setTitles] = useState<Storage[]>([]);
    const [newTitles, setNewTitles] = useState<string>("");
    const [errors, setError] = useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitles(e.target.value);
    }

    const onSubmit = () => {
        axios.post("http://localhost:5566/table/create", { title: newTitles })
            .then(response => {
                console.log('Response:', response.data);
                setNewTitles('');
                setError('');
                showAlltitles();
            })
            .catch(error => {
                console.error('Error:', error);
                setError('error is camed');
            });
    }

    const showAlltitles = () => {
        axios.post('http://localhost:5566/table/showAll')
            .then(response => {
                setTitles(response.data);

            })
            .catch(error => {
                console.error('Error:', error);
                setError('error is again camed');
            });

    }
    const deleteTitleHandler = (title: string) => {
        axios.post(`http://localhost:5566/table/delete/${title}`)
            // axios.delete(`http://localhost:5566/table/delete/=${title}`)
            .then(response => {
                console.log('Response:', response.data);
                setTitles(titles.filter(item => item.title !== title));
                message.success('record deleted');
            })
            .catch(error => {
                console.log('error:', errors);
                message.error('Already Exists in Main Records');
            });
    }

    useEffect(() => {
        showAlltitles();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'Id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: Storage) => (
                <div>
                    <Popconfirm title='are you sure you want to delete it?'
                        onConfirm={() => deleteTitleHandler(record.title)}
                        okText="yes"
                        cancelText="no">
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </div>
            )

        }
    ]

    return (
        <>
            <div style={{ marginLeft: '150px', marginRight: '150px' }}>
                <h1 style={{ textAlign: 'center', color: 'brown' }}>Add Your Job Titles</h1>
                <Form>
                    <div style={{ marginTop: '70px', marginBottom: '50px' }}>
                        <Input name="title" placeholder="Enter your Job Title" value={newTitles} onChange={changeHandler} style={{ width: '500px', marginLeft: '380px' }} /><br /><br />
                        <Button style={{ marginLeft: '400px', background: 'linear-gradient(135deg, #6253e1, #04befe)', height: '40px', width: '130px', color: 'whitesmoke' }} onClick={onSubmit}>Submit</Button>
                    </div>
                </Form>
                <Table columns={columns} dataSource={titles} />
                <Link to="/">Click Here to go to Home Page</Link>
            </div>
        </>
    );
}
export default TitleNew;