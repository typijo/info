import axios from 'axios'

const loadDocs = (obj, cat) => {
  axios
    .get(`./static/docs/${cat}/list.json`)
    .then((res) => {
      var posts = []
      res.data.forEach((fileinfo) => {
        fileinfo.path = `./static/docs/${cat}/${fileinfo.path}`
        fileinfo.name = `_${fileinfo.name}`
        posts.push(fileinfo)
      })
      obj.$set(obj, 'posts', posts)
    }).catch((e) => {
      console.warn('list not found')
    })
}

export { loadDocs }
