<template>
  <div>
    <div class="content">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div
            class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
        >
          <p class="_title0">
            Brand
            <Button @click="addModal = true"
            ><Icon type="md-add" /> Add Brand</Button
            >
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
              <!-- TABLE TITLE -->
              <tr>
                <th>Id</th>
                <th>Brand Name</th>
                <th>Brand Status</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
              <!-- TABLE TITLE -->

              <!-- ITEMS -->
              <tr v-for="(brand, i) in brands" :key="i">
                <td>{{ brand.brand_id }}</td>
                <td class="_table_name">{{ brand.brand_name }}</td>
                <td v-if="brand.brand_status == 0">An</td>
                <td v-if="brand.brand_status == 1">Hien thi</td>
                <td>{{ brand.created_at }}</td>
                <td>
                  <Button type="info" size="small" @click="showEditModal(brand, i)">Edit</Button>
                  <Button type="error" size="small" @click="showDeletingModal(brand, i)">Delete</Button>

                </td>
              </tr>
            </table>
          </div>
        </div>
        <!-- ADD BRAND MODAL -->
        <Modal
            v-model="addModal"
            title="Add Brand"
            :mask-closable="false"
            :closable="false"
        >
          <Form v-model="data" :label-width="80">
            <FormItem label="Name">
              <Input v-model="data.brand_name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="Desc">
              <Input v-model="data.brand_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Trang Thai">
              <Select v-model="data.brand_status" placeholder="chon trang thai hien thi">
                <Option value="0">An</Option>
                <Option value="1">Hien Thi</Option>
              </Select>
            </FormItem>
          </Form>
          <div slot="footer">
            <Button type="default" @click="addModal= false">Close</Button>
            <Button
                type="primary"
                @click="add_brand"
                :disabled="isAdding"
                :loading="isAdding"
            >{{ isAdding ? "Adding.." : "Add Brand" }}</Button>
          </div>
        </Modal>

        <!-- brand editing modal -->
        <Modal
            v-model="editModal"
            title="Edit Brand"
            :mask-closable="false"
            :closable="false"
        >
          <Form v-model="editData" :label-width="80">
            <FormItem label="Name">
              <Input v-model="editData.brand_name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="Desc">
              <Input v-model="editData.brand_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Trang Thai">
              <select v-model="editData.brand_status" >
                <option value="0">An</option>
                <option value="1">Hien thi</option>
              </select>
            </FormItem>
          </Form>

          <div slot="footer">
            <Button type="default" @click="editModal=false">Close</Button>
            <Button type="primary" @click="edit_brand" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Editing..' : 'Edit Brand'}}</Button>
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
            <Button type="error" @click="delete_brand" size="large" long :loading="isDeleing" :disabled="isDeleing">Delete</Button>
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
        brand_name: "",
        brand_desc: "",
        brand_status: "",
      },
      addModal: false,
      editModal: false,
      isAdding: false,
      brands: [],
      editData: {
        brand_name: "",
        brand_desc: "",
        brand_status: "",
      },
      index: -1,
      deletingIndex: -1,
      isDeleing: false,
      showDeleteModal: false,
      deleteItem: {},
    };
  },

  methods: {
    async add_brand() {
      if (this.data.brand_name.trim() == "")
        return this.e("Brand name is required");
      if (this.data.brand_desc.trim() == "")
        return this.e("Brand desc is required");
      if (this.data.brand_status.trim() == "")
        return this.e("Brand status is required");
      const res = await axios.post("http://localhost:8000/api/v1/brand",this.data);
      if(res.status === 201) {
        this.brands.unshift(res.data.data);
        this.s("Tag has been added successfully!");
        this.addModal = false;
        this.data= "";
      } else {
        if(res.status==422){
          if(res.data.errors.brand_name){
            this.e(res.data.errors.brand_name[0])
          }

        }else{
          this.swr()
        }
      }
    },
    async edit_brand() {
      if (this.editData.brand_name.trim() == "")
        return this.e("Brand name is required");
      if (this.editData.brand_desc.trim() == "")
        return this.e("Brand desc is required");
      if(this.editData.brand_status.trim() == "")
        return this.e("Brand status is required");
      const res = await axios.patch(`http://localhost:8000/api/v1/brand/${this.editData.brand_id}`,this.editData)
      if (res.status === 200) {
        this.brands[this.index].brand_name = this.editData.brand_name;
        this.brands[this.index].brand_desc = this.editData.brand_desc;
        this.brands[this.index].brand_status = this.editData.brand_status;
        this.s("sua thanh cong");
        this.editModal = false;
        this.editData = "";
      } else {
        if (res.status === 422) {
          console.log(res.data.brand_name);
          if(res.data.errors.brand_name)
            this.i(res.data.errors.brand_name[0])
        } else {
          this.swr();
        }
      }
    },
    showEditModal(brand, index){
      let obj = {
        brand_id : brand.brand_id,
        brand_name : brand.brand_name,
        brand_desc:brand.brand_desc,
        brand_status:brand.brand_status,

      }
      this.editData = obj
      this.editModal = true
      this.index = index
    },
    async delete_brand() {
      this.isDeleing = true;
      const res = await axios.delete(`http://localhost:8000/api/v1/brand/${this.deleteItem.brand_id}`,this.deleteItem);
      if (res.status === 200) {
        this.brands.splice(this.deletingIndex, 1);
        this.s("Xoa!");
      } else {
        this.swr();
      }
      this.isDeleing = false
      this.showDeleteModal = false
    },
    showDeletingModal(brand, i) {
      let deleteModalObj = {
        brand_id : brand.brand_id,
        brand_name : brand.brand_name,
        brand_desc:brand.brand_desc,
        brand_status:brand.brand_status,
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
    const res = await axios.get("http://localhost:8000/api/v1/brand");
    if (res.status == 200) {
      this.brands = res.data.data;
    } else {
      this.swr();
    }
  },
};
</script>
