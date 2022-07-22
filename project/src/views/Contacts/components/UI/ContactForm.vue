<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.firstName"
            label="First Name"
            variant="filled"
            :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.secondName"
            label="Last Name"
            variant="filled"
            :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.subject"
            label="Subject"
            variant="filled"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea counter label="Message" filled />
        </v-col>
      </v-row>
      <v-btn :disabled="!valid"> Send Message </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      valid: false,
      formData: {
        firstName: "",
        secondName: "",
        subject: "",
      },
      rules: {
        required: (value) => !!value || "Заполните поле",
        cyrilic: (value) => !/[a-z0-9]/i.test(value) || "Используйте кириллицу",
        firstUpper: (value) =>
          !!/^[А-Я]{1,1}[а-я]{1,}$/i.test(value) || "Пишите с заглавной будквы", // Доделать регулярку
      },
    };
  },
};
</script>

<style>
</style>