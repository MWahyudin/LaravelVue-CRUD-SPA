<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <router-link to="./create" class="btn btn-primary float-right"
                    >Create Post</router-link
                >
            </div>
            <div class="card-body">
                <table
                    class="table table-striped table table-bordered text-center"
                >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th colspan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(post, index) in posts">
                            <td width="20%">{{ post.title }}</td>
                            <td>{{ post.description }}</td>
                            <td colspan="3" width="30%">
                                <router-link
                                    :to="{
                                        name: 'editPost',
                                        params: { id: post.id }
                                    }"
                                    class="btn btn-primary"
                                >
                                    <i
                                        class="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                    ></i
                                    >Edit
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'readPost',
                                        params: { id: post.id }
                                    }"
                                    class="btn btn-success"
                                >
                                    <i class="fa fa-eye" aria-hidden="true"></i
                                    >View
                                </router-link>

                                <button
                                    v-on:click="
                                        submitPostDelete(post.id, index)
                                    "
                                    class="btn btn-danger"
                                >
                                    <i
                                        class="fa fa-trash"
                                        aria-hidden="true"
                                    ></i
                                    >Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
            errors: []
        };
    },

    // Fetches posts when the component is created.
    created() {
        axios
            .get(`/posts`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.posts = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });

        // async / await version (created() becomes async created())
        //
        // try {
        //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
        //   this.posts = response.data
        // } catch (e) {
        //   this.errors.push(e)
        // }
    },
    methods: {
        submitPostDelete(id, index) {
            toast
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    showConfirmButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    confirmButtonClass: "btn btn-success",
                    cancelButtonClass: "btn btn-danger",
                    toast: false
                })
                .then(result => {
                    if (result.value) {
                        axios
                            .delete(`/posts/` + id)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                console.log(response);
                                this.posts.splice(index, 1);
                                // alert("data succesfull deleted");
                                // toast.
                                toast.fire(
                                    "GGreats!!!!",
                                    "Data has been Deleted!",
                                    "success"
                                );
                            })

                            .catch(e => {
                                this.errors.push(e);
                            });
                    } else {
                        // handle dismissals
                        // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
                    }
                });
        }
    }
};
</script>
