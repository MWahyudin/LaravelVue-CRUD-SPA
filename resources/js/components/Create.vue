<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header text-center" id="judul">
                Create New Post
            </div>
            <div class="card-body" id="isi">
                <form v-on:submit="submitPost()">
                    <div class="form-group">
                        <input
                            type="text"
                            v-model="posts.title"
                            v-autofocus
                            placeholder="Title nii"
                            class="form-control"
                        />
                    </div>
                    <div>
                        <textarea
                            type="text"
                            v-model="posts.description"
                            placeholder="Description"
                            class="form-control"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <router-link to="/" class="btn btn-warning" id="btnMt"
                            >Cancel</router-link
                        >
                        <button class="btn btn-success" id="btnMt">
                            Add data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: function() {
        return {
            posts: {
                title: "",
                description: ""
            },
            errors: []
        };
    },

    // Fetches posts when the component is created.
    methods: {
        submitPost() {
            axios
                .post(`/posts`, this.posts)
                .then(response => {
                    // JSON responses are automatically parsed.

                    this.posts = response.data;
                    // toast.
                    toast.fire(
                        "GGreats!!!!",
                        "Data has been Added!",
                        "success"
                    );
                })
                .then(() => {
                    window.location.href = "/";
                })
                // .then(
                //     setTimeout(() => {
                //         window.location = "/";
                //     }, 2000)
                // )
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
};
</script>
