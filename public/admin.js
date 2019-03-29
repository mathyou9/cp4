<!DOCTYPE html>
<html>

  <head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css" />
    <title>Museum of Ordinary Objects</title>
  </head>

  <body>
    <div id="admin" class="content">
      <h1>Museum of Ordinary Objects: The Admin Page!</h1>
      <div class="heading">
        <div class="circle">
          1
        </div>
        <h2>Add an Item</h2>
      </div>
      <div class="add">
        <div class="form">
          <input v-model="title" placeholder="Title" /><br />
          <textarea v-model="description" placeholder="description"></textarea>
          <p></p>
          <input type="file" name="photo" @change="fileChanged" />
          <button @click="upload">Upload</button>
        </div>
        <div class="upload" v-if="addItem">
          <h2>{{addItem.title}}</h2>
          <img :src="addItem.path" />
          <div>
            {{addItem.description}}
          </div>
        </div>
      </div>
      <div class="heading">
        <div class="circle">2</div>
        <h2>Edit/Delete an Item</h2>
      </div>
      <div class="edit">
        <div class="form">
          <input v-model="findTitle" placeholder="Search">
          <div class="suggestions" v-if="suggestions.length > 0">
            <div class="suggestion" v-for="s in suggestions" @click="selectItem(s)">{{s.title}}
            </div>
          </div>
        </div>
        <div class="upload" v-if="findItem">
          <input v-model="findItem.title">
          <p></p>
          <img :src="findItem.path" /><br />
          <textarea v-model="findItem.description"></textarea>
        </div>
        <div class="actions" v-if="findItem">
          <button @click="deleteItem(findItem)">Delete</button>
          <button @click="editItem(findItem)">Edit</button>
        </div>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js" integrity="sha256-mpnrJ5DpEZZkwkE1ZgkEQQJW/46CSEh/STrZKOB/qoM=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.7/vue.js" integrity="sha256-g+Q8DFAmG5+eyRPSydX0LY4TfjsL11XSDrIGerbbEdA=" crossorigin="anonymous"></script>
    <script src="/admin.js"></script>
  </body>

</html>
