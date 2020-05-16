import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import useBlocks from './hooks/useBlocks'

function Blocks() {
    const { blocks } = useBlocks();

    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Transactions</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Algorithm</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {blocks.map((block) => (
                    <TableRow key={block?.time}>
                        <TableCell>{block?.height}</TableCell>
                        <TableCell>{block?.time}</TableCell>
                        <TableCell>{block?.txlength}</TableCell>
                        <TableCell>{block?.size}</TableCell>
                        <TableCell>{block?.algo}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Blocks;
