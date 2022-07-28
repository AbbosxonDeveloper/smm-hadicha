
import { useRef, useState } from 'react'
import './contact.css'
export let Contact = () => {
    let [com , setCom] = useState(null)
    let [load , setLoad] = useState()
    let [success , setSuccess] = useState()
    let textRef = useRef(null)
    let Comment = (e) => {

        e.preventDefault()
        setTimeout(() => {
            setLoad(true)
        } , 500)
        setTimeout(() => {
            setLoad(0)
        } , 1700)
        setTimeout(() => {
            console.log(textRef.current.value)
            setCom(textRef)
            localStorage.setItem('text' , textRef.current.value)
        }, 2000)
        setTimeout(() => {
            setSuccess(true)
        }, 2200)
        setTimeout(() => {
            setSuccess(0)
        } , 4500)

    }
    localStorage.getItem('text')



    return (
        <section>
            <div className="container">
                <h1 className="text-center heading mb-5">Bizga boglaning</h1>
                <div className=' d-flex justify-content-between w-75 my-4'>

                <button className='btn btn-warning'>
                <a href="https://t.me/abbosxonBlog">Telegram</a>
                </button> 
                <button className='btn btn-primary'>
                    <a href="https://instagram.com/halol_biznes_smm">
                        Instagram
                    </a>
                </button>
                </div>
                <i>
                <a className='text-decoration-underline' href="+998946918808">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-forward" viewBox="0 0 16 16">
                 <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                </svg>
                +998 (94) 691 88 08 
                </a>
                </i>
                <div className="comment">
                    <h2 className='text-danger text-center my-4'>{com ? <h2>Izohingiz qoldirildi<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></h2> : 'Izoh qoldiring'}</h2>
                    <div className={`${success ? 'alert text-warning text-center bg-success' : 'd-none'}`}>

                    <i>Successfully Loaded <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
</svg></i>
                    </div>
                    <div className={`${com ? 'alert alert-info' : 'd-none'}`}>
                    <i className='text-wrap'>{com ? 'izohingiz: ' + textRef.current.value : ''}</i>
                    </div>
                    <h3>{load ? 'loading...' : ''}</h3>
                    <form className={`${com ? 'd-none' : ''}`} onSubmit={Comment}>
                    <textarea placeholder='izoh qoldiring...' ref={textRef} className='textarea form-control' type="text" />
                    <button type='submit' className='btn btn-info form-control'>yuborish</button>
                    </form>
                </div>
            </div>
        </section>
    )
}