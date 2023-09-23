import { React, useContext, useState } from 'react';
import homeImg from '../assets/homeImg.jpg'
import './Home.css';
import NavbarContext from '../contexts/NavbarContext';

const Home = () => {

    const { setNavBarLinks } = useContext(NavbarContext);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const formSubmitted = (e) => {
        e.preventDefault();

        if (url !== '' && title !== '') {
            setNavBarLinks(prev => {
                return [...prev, {
                    url: url,
                    title: title
                }]
            })
        }

        setUrl('');
        setTitle('');

        e.target.focused.focus();
    }

    return (
        <div>
            <div className='header'>
                <img src={homeImg} alt='Home' />
                <div className='form'>
                    <form onSubmit={formSubmitted}>
                        <input name='focused' value={url} onChange={(e) => { setUrl(e.target.value) }} type='text' placeholder='Add new url' />
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} type='text' placeholder='Add new page' />
                        <input type='submit' value='Add' />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Home;