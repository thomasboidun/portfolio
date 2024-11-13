<template>
  <section id="cover" class="cover-component">
    <div class="content">
      <h1 class="heading">
        <span>Hi, my name is</span>
        <span class="firstname">Thomas</span>
        <span class="lastname">Boidun</span>
        <span>And I'm a <span class="job">Full Stack Developper</span></span>
      </h1>
      <ul class="nav-link-list">
        <li v-for="(navLink, index) in navLinks" :key="index" class="nav-link-item">
          <a :href="navLink.to" :title="navLink.title" class="nav-link">
            <span class="nav-link-icon"><i :class="navLink.icon"></i></span>
            <span class="nav-link-label">{{ navLink.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import navigationLinks from '../data/navigation-links';

export default {
  name: 'CoverComponent',
  data() {
    return {
      navigationLinks,
      navLinks: [
        { icon: 'fa-solid fa-user', title: 'About me', to: '#about' },
        { icon: 'fa-solid fa-list-check', title: 'My skills', to: '#skills' },
        { icon: 'fa-solid fa-graduation-cap', title: 'My studies', to: '#studies' },
        { icon: 'fa-solid fa-message', title: 'Contact me', to: '#contact' },
      ],
    };
  },
  mounted() {
    const cover = document.querySelector('#cover');
    const header = document.querySelector('#navbar ul');
    header.classList.add('transition-all', 'duration-1000');

    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (header.classList.contains('opacity-1')) {
              header.classList.replace('opacity-1', 'opacity-0');
            } else {
              header.classList.add('opacity-0');
            }
          } else {
            if (header.classList.contains('opacity-0')) {
              header.classList.replace('opacity-0', 'opacity-1');
            } else {
              header.classList.add('opacity-1');
            }
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cover);
  },
};
</script>

<style scoped>
.cover-component {
  @apply min-h-content h-content flex items-center bg-slate-100;
}

.cover-component .content {
  @apply container h-full flex flex-col p-4;
}

.cover-component .content .heading {
  @apply flex flex-col mt-auto text-slate-800 select-none;
}

.cover-component .content .heading .firstname,
.cover-component .content .heading .lastname {
  @apply w-fit kode-mono-700 text-7xl lg:text-9xl bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text;
}

.cover-component .content .heading .job {
  @apply kode-mono-700 underline decoration-double decoration-1 underline-offset-4 decoration-slate-800;
}

.cover-component .content .heading span:first-child,
.cover-component .content .heading span:last-child {
  @apply lg:text-xl uppercase;
}

.cover-component .content .heading span:first-child {
  @apply mb-2;
}

.cover-component .content .heading span:last-child {
  @apply mt-2;
}

.cover-component .content .nav-link-list {
  @apply list-none flex flex-row gap-4 mt-auto lg:mt-16 lg:mb-auto text-lg py-4 -mb-4;
}

.cover-component .content .nav-link-list .nav-link-item a.nav-link {
  @apply flex items-center justify-start bg-slate-900 hover:bg-slate-950 w-12 focus:w-40 h-12 overflow-hidden text-slate-100 rounded-full;
}

.cover-component .content .nav-link-list .nav-link-item a.nav-link .nav-link-icon {
  @apply flex items-center justify-center min-w-12 min-h-12;
}

.cover-component .content .nav-link-list .nav-link-item a.nav-link .nav-link-label {
  @apply text-sm text-center text-nowrap w-full pr-4;
}

/* Breakpoint: `lg` */
@media (min-width: 1024px) {
  .cover-component:hover .content .nav-link-list .nav-link-item a.nav-link {
    @apply w-40;
  }

  .cover-component .content .nav-link-list .nav-link-item:nth-child(1) a.nav-link {
    transition:
      background-color 150ms ease-in-out 0ms,
      width 150ms ease-in-out 0ms;
  }

  .cover-component .content .nav-link-list .nav-link-item:nth-child(2) a.nav-link {
    transition:
      background-color 150ms ease-in-out 0ms,
      width 150ms ease-in-out 150ms;
  }

  .cover-component .content .nav-link-list .nav-link-item:nth-child(3) a.nav-link {
    transition:
      background-color 150ms ease-in-out 0ms,
      width 150ms ease-in-out 300ms;
  }

  .cover-component .content .nav-link-list .nav-link-item:nth-child(4) a.nav-link {
    transition:
      background-color 150ms ease-in-out 0ms,
      width 150ms ease-in-out 450ms;
  }
}
</style>
