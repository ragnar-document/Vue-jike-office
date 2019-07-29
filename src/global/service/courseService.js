import request from "@/global/request/axios";
import API from "@/global/request/api";

const courseService = {
  course() {
    return request.get(API.course);
  },
  courseItem(id) {
    return request.get(API.courseItem(id));
  }
};

export default courseService;
