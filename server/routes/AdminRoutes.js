// import express from 'express'
// import { admin_get_all, admin_get_all_parents, admin_get_all_students, admin_get_all_teachers, admin_get_broadsheet, admin_get_results, admin_login, admin_search_parent, admin_search_student, admin_search_teacher, admin_signup, create_class, create_department, create_post, create_subject, delete_single_event, delete_single_image, delete_single_news, delete_single_parent, delete_single_reesult, delete_single_session, delete_single_student, delete_single_teacher, delete_single_term, get_by_class, get_classes, get_departments, get_posts, get_subjects, payment, payment_class, payment_delete, student_signup, teacher_signup, update_admin_password, update_event_data, update_fee, update_image_data, update_news_data, update_paid, update_parent_data, update_session_data, update_student_data, update_teacher_data, update_term_data } from '../controllers/AdminController.js'
// import * as AdminValidation from "../Validations/userValidation.js"
// import { adminProtect } from '../middlewares/auth_handlers.js'
// import * as TeacherValidation from "../Validations/teacherValidation.js"
// import * as ParentValidation from "../Validations/parentValidation.js"
// import * as StudentValidation from "../Validations/studentValidation.js"
// import * as CalendarValidation from "../Validations/calendarValidation.js"
// import { parent_signup } from '../controllers/ParentController.js'

// const router = express.Router()

// router.route('/')
//     .post(AdminValidation.signup, admin_signup)
//     .get(adminProtect, admin_get_all)
// router.route('/paymentclass')
//     .post(adminProtect, payment_class)
// router.route('/updatefee')
//     .post(adminProtect, update_fee)
// router.route('/updatepaid')
//     .post(adminProtect, update_paid)
// router.route('/sbyclass')
//     .post(get_by_class)
// router.route('/paymentdelete')
//     .post(adminProtect, payment_delete)
// router.route('/broadsheet')
//     .post( admin_get_broadsheet)
// router.route('/payment')
//     .post(adminProtect, payment)
// router.route('/login')
//     .post(AdminValidation.signin, admin_login)
// router.route('/getTeachers')
//     .get(adminProtect, admin_get_all_teachers)
// router.route('/getParents')
//     .get(adminProtect, admin_get_all_parents)
// router.route('/searchParents') 
//     .get(adminProtect, admin_search_parent) 
// router.route('/searchTeachers') 
//     .get(adminProtect, admin_search_teacher) 
// router.route('/createsubject') 
//     .post(adminProtect, create_subject)
//     .get(get_subjects)
// router.route('/createpost') 
//     .post(adminProtect, create_post)
//     .get(get_posts)
// router.route('/createdept') 
//     .post(adminProtect, create_department)
//     .get(get_departments)
// router.route('/createclass') 
//     .post( create_class)
//     .get(get_classes)
// router.route('/teachersignup')
//     .post(TeacherValidation.signup, adminProtect, teacher_signup)
// router.route('/parentsignup')
//     .post(ParentValidation.signup, adminProtect, parent_signup)
// router.route('/studentsignup')
//     .post(StudentValidation.signup, adminProtect, student_signup)
//     .get(adminProtect, admin_get_all_students)
// router.route('/searchStudents') 
//     .get(adminProtect, admin_search_student) 
// router.route('/result') 
//     .post(admin_get_results) 
// router.route('/deletestudent/:id')
//     .delete(adminProtect, delete_single_student)
// router.route('/deleteparent/:id')
//     .delete(adminProtect, delete_single_parent)
// router.route('/deleteteacher/:id')
//     .delete(adminProtect, delete_single_teacher)
// router.route('/deletenews/:id')
//     .delete(adminProtect, delete_single_news)
// router.route('/deleteimage/:id')
//     .delete(adminProtect, delete_single_image)
// router.route('/deletesession/:id')
//     .delete(adminProtect, delete_single_session)
// router.route('/deleteterm/:id')
//     .delete(adminProtect, delete_single_term)
// router.route('/deleteresult/:id')
//     .delete(adminProtect, delete_single_reesult)
// router.route('/deleteevent/:id')
//     .delete(adminProtect, delete_single_event)
// router.route('/updateteacher/:id')
//     .patch(TeacherValidation.update_details, adminProtect, update_teacher_data)
// router.route('/updateparent/:id')
//     .patch(ParentValidation.update_details, adminProtect, update_parent_data)
// router.route('/updatestudent/:id')
//     .patch(StudentValidation.update_details, adminProtect, update_student_data)
// router.route('/updatenews/:id')
//     .patch(adminProtect, update_news_data)
// router.route('/updateimage/:id')
//     .patch(adminProtect, update_image_data)
// router.route('/updatesession/:id')
//     .patch(CalendarValidation.update_session, adminProtect, update_session_data)
// router.route('/updatepassword/:id')
//     .patch(AdminValidation.updatePassword, adminProtect, update_admin_password)
// router.route('/updateterm/:id')
//     .patch(CalendarValidation.update_term, adminProtect, update_term_data)
// router.route('/updateevent/:id')
//     .patch(CalendarValidation.update_event, adminProtect, update_event_data)

// export default router
