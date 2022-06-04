export default {
  data() {
    return {
      contests: null,
    };
  },
  methods: {
    fetchContests() {
      fetch('https://loteriascaixa-api.herokuapp.com/api')
        .then((r) => r.json())
        .then((r) => (this.contests = r));
    },
  },
};
