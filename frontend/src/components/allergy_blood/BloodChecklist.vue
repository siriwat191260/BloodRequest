<script lang="ts">
export default {
  data() {
    return {};
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = current.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return date;
    },
    curretTime() {
      const currentTime = new Date();
      const time =
        currentTime.getHours() +
        ":" +
        currentTime.getMinutes() +
        ":" +
        currentTime.getSeconds();
      return time;
    },
  },
};
</script>

<template>
  <div style="display: flex; /* justify-content: space-between */">
    <div class="card" style="border: 0px; margin-left: 30px; width: 1366px;">
      <div class="container">
      <div class="row">
        <div class="col-7">
          <div style="margin-top:60px;">
            <p class="fontSize_header">
              ฟอร์มนำส่งตรวจการเกิดปฏิกิริยาจากการรับเลือด
            </p>
          </div>
        </div>
        <div class="col">
          <div>
            <p style="font-size: 18px; margin-top: 30px; margin-bottom: 0;">ชื่อผู้ป่วย</p>
            <div class="card" style="width: 210px; height: 48px">
              <div class="card-body">
                <font-awesome-icon icon="id-card" /><!-- <h6 class="card-subtitle mb-2 text-muted">HN</h6> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <p style="font-size: 18px; margin-top: 30px; margin-bottom: 0;">HN</p>
          <div class="card" style="width: 210px; height: 48px">
            <div class="card-body">
              <i class="fa-solid fa-address-card"></i>
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </div>
  <div id="bb1">
    <ul class="main">
      <li>
        <label for=""> วันที่ </label>
        <!-- <input type="text" name="date"> -->
        {{ currentDate() }}
      </li>
      <li>
        <label for=""> เวลา </label>
        <!-- <input type="text" name="time"> -->
        {{ curretTime() }}
      </li>
      <li>
        <label for=""> หอผู้ป่วย </label> <input type="text" name="ward" />
      </li>
    </ul>
    <ul class="main">
      <li><label for=""> โทร </label> <input type="text" name="phone" /></li>
      <li>
        <label for=""> การวินิจฉัย(ICD10) </label>
        <input type="text" name="icd10" />
      </li>
      <li>
        <label for=""> แพทย์เจ้าของไข้ </label> <input type="text" name="doc" />
      </li>
    </ul>
    <ul class="main">
      <li>
        <label for=""> หมุ่เลือดผู้ป่วย </label>
        <input type="text" name="aboplt" />
      </li>
      <li>
        <label for=""> ชนิดเลือดที่ได้รับ </label>
        <select name="product" id="">
          <option value=""></option>
          <option value="rbc">RBC</option>
          <option value="sdplppc">SDP LPPC</option>
          <option value="ffp">FFP</option>
          <option value="cryo">Cryo</option>
        </select>
      </li>
      <li>
        <label for=""> หมู่เลือดผู้บริจาค </label>
        <input type="text" name="abodoor" />
      </li>
    </ul>
    <ul class="main">
      <li>
        <label for=""> ประวัติการเกิดปฏิกิริยา </label>
        <input type="text" name="his" />
      </li>
      <li>
        <label for=""> ปริมาตรที่เติม </label>
        <input type="text" name="inputvol" />
      </li>
      <li>
        <label for=""> ยาที่ใช้ปัจจุบัน </label>
        <input type="text" name="codrug" />
      </li>
    </ul>
    <ul class="main" style="float: none">
      <li>
        <label for=""> หมายเลขถุงเลือด </label>
        <textarea name="packid" id="" cols="30" rows="5"></textarea>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.fontSize_header {
  font-size: 24px;
  font-weight: 700;
}

div #bb1 {
  width: 100%;
  overflow-x: auto;
  background-color: rgb(229, 220, 238);
  color: rgb(9, 8, 8);
}
ul.main {
  display: flex;
  list-style-type: none;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
li {
  padding-left: 5px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
