

<template>
  <div class="w-full h-full overflow-x-auto">
    <!-- Header Section -->
    <div
      class="sticky top-0 flex justify-between items-center h-15 bg-white border-b border-gray-300 shadow-sm z-20 w-full"
    >
      <div class="flex items-center p-3">
        <i class="pi pi-arrow-left text-green-400"></i>
        <p class="ml-4 text-gray-500">Employee Directory</p>
        <i class="pi pi-filter-fill text-gray-500 ml-6"></i>
        <i
          class="pi pi-search text-gray-500 ml-4 border-r border-gray-300 pr-4"
        ></i>
        <i class="pi pi-pencil text-gray-500 ml-4"></i>
      </div>

      <div class="flex items-center ml-auto p-3">
        <button
          class="bg-green-500 text-white py-1 px-4 rounded shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Create Employee
        </button>
        <i class="pi pi-ellipsis-v text-gray-500 ml-4"></i>
      </div>
    </div>

    <!-- Table Section -->

    <div class="overflow-x-auto overflow-y-hidden border-b-4 border-gray-300">
      <table class="divide-gray-200 w-full">
        <thead class="sticky top-0 bg-gray-50">
          <tr>
            <th
              class="sticky left-0 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider w-32"
            >
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-green-400"
              />
            </th>
            <th
              class="sticky left-12 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider shadow-right-border"
            >
              Employees
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Location
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Email
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Phone
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Department
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Employment Code
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Custom tags
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Positions
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              NRC
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Manager
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Manager Position
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Join Date
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
            >
              Terminate Date
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in users" :key="user.id">
            <td class="sticky left-0 bg-white px-4 py-2 whitespace-nowrap w-32">
              <input
                type="checkbox"
                v-model="selectedUsers"
                :value="user.id"
                class="form-checkbox h-4 w-4 text-green-400"
              />
            </td>
            <td
              class="sticky left-12 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 bg-white z-10 shadow-right-border"
            >
              <div class="inline-flex items-center">
                <Avatar
                  :image="require(`../assets/${user.avatar}`)"
                  class="mr-2"
                  size="xlarge"
                  shape="circle"
                  :style="{ width: '30px', height: '30px' }"
                />
                <span class="align-middle">{{ user.name }}</span>
              </div>
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.location }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.email }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.phone }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.department }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.employmentCode }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.customTags }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.positions }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.nrc }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.manager }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.managerPosition }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.joinDate }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ user.terminateDate }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Pagination Section -->
    <div class="flex justify-end items-center py-3">
      <div
        class="mr-4 ml-4 text-gray-500 px-4 py-2 text-sm bg-white border border-gray-300 rounded-md"
      >
        50/page
        <i class="ml-4 pi pi-angle-down"></i>
      </div>
      <div>
        <nav class="inline-flex rounded-md" aria-label="Pagination">
          <i
            class="pi pi-angle-left px-4 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-green-400"
          ></i>
          <button
            class="px-4 py-2 text-sm text-gray-500 bg-green-400 border border-gray-300 hover:bg-green-400"
          >
            1
          </button>
          <button
            class="px-4 py-2 text-sm text-gray-500 bg-white border border-gray-300 hover:bg-green-400"
          >
            2
          </button>
          <button
            class="px-4 py-2 text-sm text-gray-500 bg-white border border-gray-300 hover:bg-green-400"
          >
            3
          </button>
          <i
            class="pi pi-angle-right px-4 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-green-400"
          ></i>
        </nav>
      </div>
      <div class="mr-4 ml-4 text-gray-500">
        Go to
        <button
          class="ml-4 px-4 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-green-400"
        >
          1
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ye Min Htun",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Product dpt",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 2,
          name: "Kyi Sin Hsu Thar",
          location: "Yangon office",
          email: "kyisinhsuthar@example.com",
          phone: "+959-888455521",
          department: "Qality assurance engineering",
          employmentCode: "004-342",
          customTags: "Trainee",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar1.jpg",
        },
        {
          id: 3,
          name: "Myat The Chit",
          location: "Yangon office Sue Lay",
          email: "myatthechit@example.com",
          phone: "+959-888455521",
          department: "Development",
          employmentCode: "004-342",
          customTags: "Spinish-spoken",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar1.jpg",
        },
        {
          id: 4,
          name: "Walter",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Tech & Development",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Zayer Zay",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 5,
          name: "Jonathan",
          location: "Mandalay office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Product dpt",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 6,
          name: "Devi",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Customer success",
          employmentCode: "004-342",
          customTags: "Spinish-spoken",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 7,
          name: "Mike",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Customer success",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 8,
          name: "Biden",
          location: "Yangon office Sue Lay",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Product dpt",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Zayer Zy",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 9,
          name: "Eric",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Development",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar1.jpg",
        },
        {
          id: 10,
          name: "Elanor",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Tech and Development",
          employmentCode: "004-342",
          customTags: "Spinish-spoken",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar1.jpg",
        },
        {
          id: 11,
          name: "Luke",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Customer success",
          employmentCode: "004-342",
          customTags: "Intern",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Zayer Zy",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
        {
          id: 12,
          name: "Wilson",
          location: "Yangon office",
          email: "yeminhtun@example.com",
          phone: "+959-888455521",
          department: "Product dpt",
          employmentCode: "004-342",
          customTags: "Spinish-spoken",
          positions: "UX Designer",
          nrc: "12/PaBaTa(N)/00700",
          manager: "Myo Zaw Hein",
          managerPosition: "CEO",
          joinDate: "12.2.2021",
          terminateDate: " - ",
          avatar: "avatar2.jpg",
        },
      ],
      selectedUsers: [], // Array to store selected user IDs
    };
  },
};
</script>

<style>
.text-green-400:checked {
  accent-color: #40ee82;
}
</style>
