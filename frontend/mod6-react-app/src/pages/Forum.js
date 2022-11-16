import "./Forum.css"
import ForumPost from "./ForumPost"
export default function Forum(props){


    return (
<>
<div id="main-content" class="blog-page">
    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-8 col-md-12 left-box">

               <ForumPost />
               <div>
                {props.children}
               </div>
                                        
                <ul class="pagination pagination-primary">
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                </ul>                
            </div>
            <div class="col-lg-4 col-md-12 right-box">
                <div class="card">
                    <div class="body search">
                        <div class="input-group m-b-0">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

</>


    )
    
   




    
}