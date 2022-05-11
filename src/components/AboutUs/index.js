import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Layout from '../../layout';


const mapData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function AboutUs() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => {
            resp.json().then((result) => {
                const array = result.map(item => ({ ...item, checked: false }))
                setData(array)
            })
        })
    }, [])

    // console.log(data);

    const DeleteRecode = (index) => {
        const dataCopy = data.filter(item => item.id !== index + 1);
        setData(
            dataCopy
        )
    }

    const handleCheck = (e, index) => {
        // console.log("e.target.checked", e.target.checked);
        const dataClone = data.slice();
        dataClone[index].checked = e.target.checked;
        // dataClone[index] = {
        //     ...dataClone[index],
        //     checked: true
        // }
        setData(
            dataClone
            //     {
            //     ...data,
            //     checked: true
            // }
        )
    }

    const deleteCheck = () => {
        // console.log("data", data);
        const findData = data.filter(item => item.checked !== true);

        // console.log("findData", findData);
        setData(
            findData

        )
    }

    const [mapArray, setMapArray] = useState([])
    const handleIndex = (id) => {
            if (mapArray.includes(id)) {
                const index = mapArray.indexOf(id)
                const newArray = mapArray.slice()
                const spliceArray = newArray.splice(index,1)
                setMapArray(newArray)
            } else {
                setMapArray([...mapArray, id])
            }
        
    }

    console.log("mapArray", mapArray);



    return (
        <>
            <Layout>
                <div className="container">
                    {/* <div className="my-4">
                        {
                            mapData.map((item, index) => {
                                return (
                                    <div className="py-3" key={index}><span className="cursor-pointer" onClick={() => handleIndex(index)}>{item}</span></div>
                                )
                            })
                        }
                    </div> */}
                    <Button variant="contained" color="secondary" onClick={() => deleteCheck()}>Delete</Button>


                    <table className="table table-dark table-hover mt-5">

                        <thead>
                            <tr className="text-align-center">
                                <th>Id</th>
                                <th>userId</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><Button variant="contained" color="secondary" onClick={() => DeleteRecode(index)}>Delete</Button></td>
                                            <td><input type="checkbox" checked={item.checked} onChange={(e) => handleCheck(e, index)}></input></td>
                                            <td>{item.id}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    )
}
