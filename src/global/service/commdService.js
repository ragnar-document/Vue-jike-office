import request from "@/global/request/axios";
import API from "@/global/request/api";

const commdService = {
  indexData() {
    return request.get(API.index);
  },
  switchImages() {
    return request.get(API.switchImages);
  },
  category() {
    return request.get(API.category);
  },
  course() {
    return request.get(API.course);
  }
};

export default commdService;
