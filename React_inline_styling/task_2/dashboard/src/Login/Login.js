import './Login.css';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
   /* App-body */
    appBody: {
        minHeight: '60vmin',
        padding: '32px',
    },

    appBodyParagraph: {
        fontWeight: 'bold',
    },

    form: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center',
    },

    appBodyLabelSpan: {
        paddingLeft: '2px',
        fontWeight: 'bold',
        marginRight: '16px',
    },

    appBodyInput: {
        /* display: block, */
        height: '32px',
        lineHeight: '16px',
        fontSize: '16px',
        paddingLeft: '2px',
        marginTop: '2px',
    },

    appBodyButton: {
        borderRadius: '25px',
        width: '150px',
        height: '32px',
        backgroundColor: 'white', /* #ff4242 */
        fontSize: '24px',
        border: '.5px solid lightgrey',
    },
});

function Login() {
    return (
        <div className={css(styles.appBody)} id="Login">
            <p className={css(styles.appBodyParagraph)}>Login to access the full dashboard</p>
            <div className={css(styles.form)}>
                <label htmlFor="email">
                    <span className={css(styles.appBodyLabelSpan)}>Email:</span>
                    <input className={css(styles.appBodyInput)} type="email" name="email" id="email" />
                </label>

                <label htmlFor="password">
                    <span className={css(styles.appBodyLabelSpan)}>Password:</span>
                    <input className={css(styles.appBodyInput)} type="password" name="password" id="pwd" />
                </label>

                <button className={css(styles.appBodyButton)} onClick={ () => { } }>OK</button>
            </div>
        </div>
    );
}

export default Login;
