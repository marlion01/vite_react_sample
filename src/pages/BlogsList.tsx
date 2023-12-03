import '@mdxeditor/editor/style.css'
import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings'
import fs from 'fs'
import path from 'path'
const BlogsList=()=>{
    return(
        <div>
            <MDXEditor
                plugins={[headingsPlugin()]}
                markdown={fs.readFileSync(path.resolve('../Blogs/hello.md'), 'utf-8')}
            />
        </div>
    )
}
export default BlogsList;