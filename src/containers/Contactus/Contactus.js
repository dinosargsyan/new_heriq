import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '../../components/Input/Input';
import './Contactus.scss';
import Footer from '../../components/Footer/Footer';
import fbService from '../../api/fbService.js';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

class Contactus extends Component {
    state = {
        posts: [],
        name: "",
        email: "",
        mess: "",
        loading: false
    }
    createPost = () => {
        fbService.createPost({
            name: this.state.name,
            email: this.state.email,
            mess: this.state.mess,
        })
            .then(data => {
                this.setState({
                    posts: [data, ...this.state.posts],
                    name: "",
                    email: "",
                    mess: ""
                })
            })
    }

    getInputValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className='contact_page'>
                <div className='contact-us'>
                    <span>{t('contact_us')}</span>
                    <div className='textfield'>
                        <TextField
                            onChange={(e) => this.getInputValue('name', e.target.value)}
                            value={this.state.name}
                            id="outlined-basic"
                            label={t('name')}
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            fullWidth
                        />

                        <TextField
                            onChange={(e) => this.getInputValue('email', e.target.value)}
                            value={this.state.email}
                            type='email'
                            id="outlined-basic"
                            label={t('email')}
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            fullWidth


                        />
                        <TextField
                            onChange={(e) => this.getInputValue('mess', e.target.value)}
                            value={this.state.mess}
                            type='text'
                            id="outlined-basic"
                            label={t('message')}
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            fullWidth
                            multiline
                            rows={4}
                        />


                        <Button
                            onClick={this.createPost}
                            variant="contained"
                            color="secondary"
                            margin="normal">{t('submit')}</Button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Contactus;
