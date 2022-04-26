<template>
  <div>
    <div class="content">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div
            class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
        >
          <p class="_title0">
            Category
            <Button @click="addModal = true"
            ><Icon type="md-add" /> Add Category</Button
            >
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
              <!-- TABLE TITLE -->
              <tr>
                <th>Id</th>
                <th>Category Name</th>
                <th>Category Status</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
              <!-- TABLE TITLE -->

              <!-- ITEMS -->
              <tr v-for="(cat, i) in cats" :key="i">
                <td>{{ cat.category_id }}</td>
                <td class="_table_name">{{ cat.category_name }}</td>
                <td v-if="cat.category_status == 0">An</td>
                <td v-if="cat.category_status == 1">Hien thi</td>
                <td>{{ cat.created_at }}</td>
                <td>
                  <Button type="info" size="small" @click="showEditModal(cat, i)">Edit</Button>
                  <Button type="error" size="small" @click="showDeletingModal(cat, i)">Delete</Button>

                </td>
              </tr>
            </table>
          </div>
        </div>
        <!-- ADD CATEGORY MODAL -->
        <Modal
            v-model="addModal"
            title="Add Category"
            :mask-closable="false"
            :closable="false"
        >
          <Form v-model="data" :label-width="80">
            <FormItem label="Name">
              <Input v-model="data.category_name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="Desc">
              <Input v-model="data.category_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Trang Thai">
              <Select v-model="data.category_status" placeholder="chon trang thai hien thi">
                <Option value=0>An</Option>
                <Option value=1>Hien Thi</Option>
              </Select>
            </FormItem>
          </Form>
          <div slot="footer">
            <Button type="default" @click="addModal= false">Close</Button>
            <Button
                type="primary"
                @click="add_category"
                :disabled="isAdding"
                :loading="isAdding"
            >{{ isAdding ? "Adding.." : "Add Category" }}</Button>
          </div>
        </Modal>

        <!-- category editing modal -->
        <Modal
            v-model="editModal"
            title="Edit Category"
            :mask-closable="false"
            :closable="false"
        >
          <Form v-model="editData" :label-width="80">
            <FormItem label="Name">
              <Input v-model="editData.category_name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="Desc">
              <Input v-model="editData.category_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Trang Thai">
              <select v-model="editData.category_status" >
                <option value="0">An</option>
                <option value="1">Hien thi</option>
              </select>
            </FormItem>
          </Form>

          <div slot="footer">
            <Button type="default" @click="editModal=false">Close</Button>
            <Button type="primary" @click="edit_category" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Editing..' : 'Edit Category'}}</Button>
          </div>
        </Modal>
        <!-- category deleting modal -->
        <Modal v-model="showDeleteModal" width="360">
          <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
          </p>
          <div style="text-align:center">
            <p>Are you sure you want to delete Category ?</p>
          </div>
          <div slot="footer">
            <Button type="error" @click="delete_category" size="large" long :loading="isDeleing" :disabled="isDeleing">Delete</Button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        category_name: "",
        category_desc: "",
        category_status: "",
      },
      addModal: false,
      editModal: false,
      isAdding: false,
      cats: [],
      editData: {
        category_name: "",
        category_desc: "",
        category_status: "",
      },
      index: -1,
      deletingIndex: -1,
      isDeleing: false,
      showDeleteModal: false,
      deleteItem: {},
    };
  },

  methods: {
    async add_category() {
      if (this.data.category_name.trim() == "")
        return this.e("Category name is required");
      if (this.data.category_desc.trim() == "")
        return this.e("Category desc is required");
      if (this.data.category_status.trim() == "")
        return this.e("Category status is required");
      const res = await axios.post("http://localhost:3030/api/v1/category",this.data);
      if(res.status === 201) {
        this.cats.unshift(res.data.data);
        this.s("Tag has been added successfully!");
        this.addModal = false;
        this.data= "";
      } else {
        if(res.status==422){
          if(res.data.errors.category_name){
            this.e(res.data.errors.category_name[0])
          }

        }else{
          this.swr()
        }
      }
    },
    async edit_category() {
      if (this.editData.category_name.trim() == "")
        return this.e("Category name is required");
      if (this.editData.category_desc.trim() == "")
        return this.e("Category desc is required");
      if(this.editData.category_status.trim() == "")
        return this.e("Category status is required");
      const res = await axios.patch(`http://localhost:8000/api/v1/category/${this.editData.category_id}`,this.editData)
      if (res.status === 200) {
        this.cats[this.index].category_name = this.editData.category_name;
        this.cats[this.index].category_desc = this.editData.category_desc;
        this.cats[this.index].category_status = this.editData.category_status;
        this.s("sua thanh cong");
        this.editModal = false;
        this.editData = "";
      } else {
        if (res.status === 422) {
          console.log(res.data.category_name);
          if(res.data.errors.category_name)
            this.i(res.data.errors.category_name[0])
        } else {
          this.swr();
        }
      }
    },
    showEditModal(cat, index){
      let obj = {
        category_id : cat.category_id,
        category_name : cat.category_name,
        category_desc:cat.category_desc,
        category_status:cat.category_status,

      }
      this.editData = obj
      this.editModal = true
      this.index = index
    },
    async delete_category() {
      this.isDeleing = true;
      const res = await axios.delete(`http://localhost:8000/api/v1/category/${this.deleteItem.category_id}`,this.deleteItem);
      if (res.status === 200) {
        this.cats.splice(this.deletingIndex, 1);
        this.s("Xoa!");
      } else {
        this.swr();
      }
      this.isDeleing = false
      this.showDeleteModal = false
    },
    showDeletingModal(cat, i) {
      let deleteModalObj = {
        category_id : cat.category_id,
        category_name : cat.category_name,
        category_desc:cat.category_desc,
        category_status:cat.category_status,
        /* data: cat,
        deletingIndex: i,
        isDeleted: false, */
      }
      /* this.$store.commit("setDeletingModalObj", deleteModalObj);
      console.log("delete method called"); */
      this.deleteItem = deleteModalObj
      this.showDeleteModal = true,
          this.deletingIndex = i
    }
  },
  async created() {
    const res = await axios.get("http://localhost:8000/api/v1/category");
    if (res.status == 200) {
      this.cats = res.data.data;

    } else {
      this.swr();
    }
  },

};
</script>
