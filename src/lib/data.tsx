// temporary data
const User = [
{id :1, name : 'qwerty'},
{id:2, name:'werty'}
]
const Post = [
    {id:1, name: 'kritika', body:'i have to learn next.js', userId:1},
    {id:2, name: 'krits', body:'i have to learn next.js', userId:1},
    {id:3, name: 'kittu', body:'i have to learn next.js', userId:2},
    {id:4, name: 'tinni', body:'i have to learn next.js', userId:2}
]
export const getPost = async() => {
    return Post
}
export const getPosts = async (id) => {
    return Post.find((posts) => posts.id===id):
}