<template>
  <form class="review-form" @submit.prevent="submitReview" novalidate>
    <div class="mb-3">
      <label for="name" class="form-label">الاسم</label>
      <input
        id="name"
        v-model.trim="name"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': showErrors && !name }"
        placeholder="اكتب اسمك"
        required
      />
      <div class="invalid-feedback">الرجاء إدخال الاسم.</div>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">رسالتك</label>
      <textarea
        id="message"
        v-model.trim="message"
        class="form-control"
        :class="{ 'is-invalid': showErrors && !message }"
        rows="4"
        placeholder="اكتب رأيك عن الخدمة..."
        required
      ></textarea>
      <div class="invalid-feedback">الرجاء كتابة الرسالة.</div>
    </div>

    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary m-5">إرسال رأي</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ReviewForm",
  data() {
    return {
      name: "",
      message: "",
      showErrors: false,
    };
  },
  methods: {
    submitReview() {
      this.showErrors = false;
      if (!this.name || !this.message) {
        this.showErrors = true;
        return;
      }

      const payload = {
        author: this.name,
        text: this.message,
        date: new Date().toISOString(),
      };

      this.$emit("submit-review", payload);

      this.name = "";
      this.message = "";
      this.showErrors = false;
    },
  },
};
</script>

<style scoped>
.review-form {
  max-width: 700px;
  margin: 0 auto;
}

.review-form .btn {
  min-width: 140px;
}
input:focus,
textarea:focus {
  outline: none; /* إزالة الإطار الافتراضي */
  box-shadow: 0 0 8px 2px rgba(128, 208, 199, 0.6); /* ظل باللون #80d0c7 */
  border-color: #80d0c7; /* تغيير لون الحدود */
  transition: 0.3s;
}

:host,
.review-form {
  direction: rtl;
}
</style>
