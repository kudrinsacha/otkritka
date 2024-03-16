import React, {useState} from 'react';
import {Box, Button, Input, Modal} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Content.scss'
import getOut from '../../assets/images/will-smith-hitch.gif'
import writeName from '../../assets/images/harry-potter-tom-riddle.gif'
import dimas from '../../assets/images/saul-goodman3d-dima.gif'
import ryan from '../../assets/images/barbie-movie-2023-barbie.gif'
import katya from '../../assets/images/me-gustas-katya-kitten.gif'

const Content = () => {

    const [gif, setGif] = useState()
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [gift, setGift] = useState('gift gift-hidden')
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setInputValue('')
        setGift('gift gift-hidden')
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: '#302c2c',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function isKatuha(name) {
        if (name === '') {
            setGif(writeName);
            setText('Какой-то долбаёб написал свое имя и ты напиши')
            handleOpen();
        } else if (name.toLowerCase() !== 'екатерина' && name.toLowerCase() !== 'катюха' && name.toLowerCase() !== 'катя' && name.toLowerCase() !== 'кейт' && name.toLowerCase() !== 'дима' && name.toLowerCase() !== 'дмитрий' && name.toLowerCase() !== 'димас' && name.toLowerCase() !== 'димон' && name.toLowerCase() !== 'саня' && name.toLowerCase() !== 'саша' && name.toLowerCase() !== 'санек' && name.toLowerCase() !== 'александр') {
            setGif(getOut);
            setText('Тебе тут не рады');
            handleOpen();
        } else if (name.toLowerCase() === 'дима' || name.toLowerCase() === 'дмитрий' || name.toLowerCase() === 'димас' || name.toLowerCase() === 'димон'){
            setGif(dimas);
            setText('здаров димас позови сюда свою женщину');
            handleOpen();
        } else if (name.toLowerCase() === 'саня' || name.toLowerCase() === 'саша' || name.toLowerCase() === 'санек' || name.toLowerCase() === 'александр') {
            setGif(ryan);
            setText('балуешься ?)')
            handleOpen();
        } else {
            setGif(katya);
            setText('С днём рождения, скачай ');
            setGift('gift')
            handleOpen();
        }
    }

    function downloadGift() {
        fetch('downloadCodeWord.pdf').then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "prikol.pdf";
                alink.click();
            });
        });
    }

    return (
        <div className='content'>
            <div className='content-name'>
                <Input
                    color='secondary'
                    value={inputValue}
                    placeholder='Введите имя'
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <Button variant='outlined' onClick={() => isKatuha(inputValue)}>готово</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseOutlinedIcon onClick={handleClose} />
                    <div>
                        <div className='modal-text'>
                            {text}
                            <div className={gift} onClick={downloadGift}>прикол</div>
                        </div>
                        <img width='300' src={gif} alt=""/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Content;