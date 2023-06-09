import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN") || null,
    },
    surveys: [
      {
        id: 1,
        title: "The AwesomeSurvey",
        slug: "the-awesome-survey",
        status: "draft",
        image: '',
        description: "Welcome to the AwesomeSurvey! We value your feedback and opinions. Please take a few minutes to answer the following questions.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [
          {
            id: 1,
            type: 'select',
            question: 'Select your country?',
            description: null,
            data: {
              multiple: false,
              options: [
                {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA'},
                {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Georgia'},
                {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Germany'},
                {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'India'},
                {uuid: '8d14341b-ec2b-4924-9aea-bda6a53b51fc', text: 'United Kingdom'},
              ]
            },
          },
          {
            id: 2,
            type: 'checkbox',
            question: 'Which language videos do you prefer?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'JavaScript'},
                {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'PHP'},
                {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'HTML + CSS'},
                {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'All of the above'},
              ]
            },
          },
          {
            id: 3,
            type: 'checkbox',
            question: 'Which PHP framework do you prefer?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Laravel'},
                {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Yii2'},
                {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Codeigniter'},
                {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'Symfony'},
              ]
            },
          },
          {
            id: 4,
            type: 'radio',
            question: 'Which Laravel Framework do you love most?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {uuid: '31132230-29e0-4857-84ed-417542c7c8dd', text: 'Laravel 5'},
                {uuid: '0ab85f86-15ee-4ec0-ba42-793daf243a5d', text: 'Laravel 6'},
                {uuid: '748fd679-d983-4d73-8d7b-7bb4abd22254', text: 'Laravel 7'},
                {uuid: 'f1864724-1009-4bed-94a1-3cfe93dfb82a', text: 'Laravel 8'},
              ]
            },
          },
          {
            id: 5,
            type: 'checkbox',
            question: 'What type of projects do you built with Laravel?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'REST API'},
                {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'E-commerce'},
                {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Real Estate'},
                {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'All of the above'},
              ]
            },
          },
          {
            id: 6,
            type: 'text',
            question: 'What do you think about us?',
            description: 'Write your honest opinion. Everything is anonymous.',
            data: null
          },
        ]
      },
      {
        id: 2,
        title: "Laravel 10",
        slug: "laravel-10",
        status: "draft",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
        description: `Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.`,
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
      },
      {
        id: 3,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        description: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.`,
        created_at: "2021-12-21 17:00:00",
        updated_at: "2021-12-21 17:00:00",
        expire_date: "2021-12-31 00:00:00",
      },
      {
        id: 4,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
        description: `A utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.`,
        created_at: "2021-12-21 14:00:00",
        updated_at: "2021-12-21 14:00:00",
        expire_date: "2021-12-31 00:00:00",
      },
    ],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((res) => {
        commit("logout");
        return res;
      });
    },
  },
  
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.data = userData.user;
      state.user.token = userData.token;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
