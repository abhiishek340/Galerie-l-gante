import { request } from '../utilities/api'

const postsURL = '/api/posts'

const getAllPosts = () => request('GET', postsURL)
const getPostsById = (id) => request('GET', `${postsURL}/${id}`)

// new functions to create, update, and delete blog posts
const createPost = (post) => request('POST', postsURL, post)
const updatePost = (post) => request('PATCH', `${postsURL}/${post.id}`, post)
const deletePost = (id) => request('DELETE', `${postsURL}/${id}`)

// API URL patterns
// /api/posts    GET
// /api/posts/34 GET
// /api/posts    POST
// /api/posts/55 PATCH
// /api/posts/88 DELETE

export default {
    getAllPosts,
    getPostsById,
    createPost,
    updatePost,
    deletePost
}