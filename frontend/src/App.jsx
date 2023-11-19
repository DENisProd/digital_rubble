// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Wallet} from "./pages/Wallet";

function App() {
    const [blocks, setBlocks] = useState([]);
    const [wallets, setWallets] = useState([]);
    const [newBlockData, setNewBlockData] = useState('');
    const [activeWallet, setActiveWallet] = useState('');
    const [transferAmount, setTransferAmount] = useState('');

    useEffect(() => {
        // Загрузка блоков и кошельков с сервера при монтировании компонента
        axios.get('http://localhost:8080/blocks')
            .then(response => setBlocks(response.data))
            .catch(error => console.error('Error fetching blocks:', error));

        axios.get('http://localhost:8080/wallets')
            .then(response => setWallets(response.data))
            .catch(error => console.error('Error fetching wallets:', error));
    }, []);

    const mineBlock = () => {
        // Создание нового блока на сервере
        axios.post('http://localhost:8080/mineBlock', { data: newBlockData })
            .then(response => {
                setBlocks([...blocks, response.data]);
                setNewBlockData('');
            })
            .catch(error => console.error('Error mining block:', error));
    };

    const createWallet = () => {
        // Создание нового кошелька на сервере
        axios.post('http://localhost:8080/createWallet')
            .then(response => setWallets([...wallets, response.data]))
            .catch(error => console.error('Error creating wallet:', error));
    };

    const transferFunds = () => {
        // Перевод средств на сервере
        if (activeWallet && transferAmount) {
            axios.post('http://localhost:8080/transferFunds', {
                from: activeWallet,
                to: 'recipient-wallet-address', // Здесь укажите адрес получателя
                amount: transferAmount,
            })
                .then(response => {
                    console.log('Transfer successful:', response.data);
                    setTransferAmount('');
                })
                .catch(error => console.error('Error transferring funds:', error));
        }
    };

    return (
        <>
            <Wallet />

            {/*<div className="App">*/}
            {/*    <h1>Blockchain Wallet</h1>*/}
            {/*    <div>*/}
            {/*        <h2>Blocks</h2>*/}
            {/*        <ul>*/}
            {/*            {blocks.map(block => (*/}
            {/*                <li key={block.index}>*/}
            {/*                    <strong>Index:</strong> {block.index}, <strong>Data:</strong> {block.data}, <strong>Hash:</strong> {block.hash}*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h2>Mine New Block</h2>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Enter data for the new block"*/}
            {/*            value={newBlockData}*/}
            {/*            onChange={(e) => setNewBlockData(e.target.value)}*/}
            {/*        />*/}
            {/*        <button onClick={mineBlock}>Mine Block</button>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h2>Wallets</h2>*/}
            {/*        <ul>*/}
            {/*            {wallets.map(wallet => (*/}
            {/*                <li key={wallet.address}>*/}
            {/*                    <strong>Address:</strong> {wallet.address}, <strong>Balance:</strong> {wallet.balance}*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*        <button onClick={createWallet}>Create Wallet</button>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h2>Transfer Funds</h2>*/}
            {/*        <select onChange={(e) => setActiveWallet(e.target.value)}>*/}
            {/*            <option value="" disabled selected>Select Wallet</option>*/}
            {/*            {wallets.map(wallet => (*/}
            {/*                <option key={wallet.address} value={wallet.address}>{wallet.address}</option>*/}
            {/*            ))}*/}
            {/*        </select>*/}
            {/*        <input*/}
            {/*            type="number"*/}
            {/*            placeholder="Enter amount"*/}
            {/*            value={transferAmount}*/}
            {/*            onChange={(e) => setTransferAmount(e.target.value)}*/}
            {/*        />*/}
            {/*        <button onClick={transferFunds}>Transfer Funds</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>

    );
}

export default App;
