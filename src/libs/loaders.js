import axios from 'axios'

const loadDocs = (obj, cat) => {
  axios
    .get(`./static/docs/${cat}/list.json`)
    .then((res) => {
      var posts = []
      res.data.forEach((fname) => {
        var path = `./static/docs/${cat}/${fname}`
        posts.push(path)
      })
      obj.$set(obj, 'posts', posts)
    }).catch((e) => {
      console.warn('list not found')
    })
}

export { loadDocs }
