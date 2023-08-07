import './Post.css'

export function Post({post}){
    return(
        <div className='individualpost'>
            <div className='user-post'>
            { post.nombre ?
            <div className='user-data'>
                <h2>{post.nombre}</h2>
                <h3>{post.email}</h3>
            </div>
            :
            <div className='user-data'>
                <h2>{post.email}</h2>
            </div>
            }
            <p className='creado'>{post.creado}</p>
            </div>

            <p className='content'>{post.post}</p>
        </div>
    )
}