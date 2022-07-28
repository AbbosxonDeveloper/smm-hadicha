import { Link } from "react-router-dom"

export const Products = () => {
    return (
        <section>
            <div className="container">
                <h4 className="alert alert-danger">
                Bizda hozircha Prodktlar yoq , yaqin orada sotuvga chiqadi...
                </h4>
                <div>

            <button className='btn mt-3 btn-warning me-4'>
        <Link to='/contact'>bizga bo'glanish uchun</Link>
        </button>
        <button className='btn mt-3 btn-danger'>
        <Link to='/'>sahifa boshiga qaytish</Link>
        </button>
        <div>
        <button className='btn btn-info mt-3 w-50'>
            <a href="https://t.me/abbosxonBlog">
                telegram
            </a>
        </button>
        </div>
            </div>
                </div>
        </section>
    )
}