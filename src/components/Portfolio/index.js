import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../layout'

const textAreaData = {
    testAreaText: ''
}

export default function Portfolio() {

    const [testText, setTestText] = useState(textAreaData);

    const [saveData, setSaveData] = useState('save Changes ...')

    const localStorageData = JSON.parse(localStorage.getItem("textareacontent"))

    const onChange = (e) => {
        console.log("e.target.value", e.target.value)
        setTestText({
            ...testText,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        setSaveData("save Changes ...")
        localStorage.setItem("textareacontent", JSON.stringify([testText]))
    }, [testText])
    console.log("testTextValue", testText);

    useEffect(() => {
        console.log("testText",testText);
        const id = setInterval(() => {setSaveData("change saved")}, 500)
        return () => clearInterval(id)
    }, [testText])

    return (
        <>
            <Layout>
                <Container>
                    <div>
                        Doc:- <h1>{saveData}</h1>
                        <div>
                            <textarea type="text" name="testAreaText" onChange={onChange} />
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}
