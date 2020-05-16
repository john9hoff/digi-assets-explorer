import { useEffect, useState } from 'react';
import axios from "axios"

export default function useBlocks() {
    const [blocks, setBlocks] = useState([]);
    const getBlocks = () => {
        axios
            .get(`https://digiexplorer.info/api/blocks`)
            .then(res => {
                const data = res?.data?.blocks
                setBlocks(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getBlocks()
    })
    return { blocks }
}
