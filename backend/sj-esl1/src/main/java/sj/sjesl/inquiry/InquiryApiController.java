package sj.sjesl.inquiry;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class InquiryApiController {

    private final InquiryService inquiryService;

    @PostMapping("/inquiry")    //문의 등록
    public Long save(@RequestBody InquirySaveRequestDto requestDto) {
        return inquiryService.save(requestDto);
    }

    @PutMapping("/inquiry/{id}")    //문의 내용 변경
    public Long update(@PathVariable Long id, @RequestBody InquiryUpdateRequestDto requestDto) {
        return inquiryService.update(id, requestDto);
    }

    @GetMapping("/inquiry/{id}")    //문의 조회
    public InquiryResponseDto findById(@PathVariable Long id) {
        return inquiryService.findById(id);
    }

    @DeleteMapping("/inquiry/{id}") //문의 삭제
    public Long delete(@PathVariable Long id) {
        inquiryService.delete(id);
        return id;
    }

    //    POST – 파라미터 { userId } : 해당 유저가 작성한 문의 정보 리스트 반환
//필요한 문의 정보 : [{문의id, 문의명, 문의 작성일, 문의 내용, 답변 내용, 답변 날짜, 댓글 리스트 }, …]
//    @GetMapping("/inquiry/{userId}")    //문의 조회
//    public void findById(@PathVariable Long id) {
//        return inquiryService.findByUserId(id);
//    }

//PUT – 파라미터 { 문의 제목, 문의 내용 } : 문의 제목 및 내용 변경 수행
//DELETE – 파라미터 { 문의 id } : 문의 삭제 수행
}
