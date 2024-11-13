export default {
  scrollToActiveLink() {
    const link = document.querySelector('.router-link-active');
    const id = new URL(link.href).pathname.substring(1);
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },
  scrollToTop() {
    document.querySelector('main').scrollTo({ top: 0, behavior: 'smooth' });
  },
};
