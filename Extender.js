const path = require('path')
const axios = require('axios')
const inquirer = require('inquirer')

async function register_extension(basePath, tenantId, body) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, '/extensions')

    const opts = {
        headers: {
            Cookie: '_ga=GA1.1.1716687654.1714987124; _hjSessionUser_1768116=eyJpZCI6IjA5MTFjMGI2LTAzZTktNThjMC04YTJkLTg4ZTdlOGI1OWUyNyIsImNyZWF0ZWQiOjE3MTQ5ODk2MTQzNzgsImV4aXN0aW5nIjp0cnVlfQ==; hubspotutk=f3e79620d86e1eff7cd373d776c01e84; __hssrc=1; technicalCookies=enabled; performanceCookies=enabled; profilingCookies=enabled; _ga_GNTKDDJB0H=GS1.1.1716371000.29.1.1716371016.0.0.0; _hjSession_1768116=eyJpZCI6ImI0NThlYzE3LTE3MTUtNDkyMC1hM2MyLTYzZTVlOWU1MjMzYiIsImMiOjE3MTYzNzExNDA5MTksInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; __hstc=96381635.f3e79620d86e1eff7cd373d776c01e84.1714989614538.1716367604841.1716371141522.25; __hssc=96381635.2.1716371141522; _ga_V2F5JZXRR0=GS1.1.1716371136.25.1.1716371464.0.0.0; sid=eyJhbGciOiJSUzI1NiIsImtpZCI6IkVEQzI1MDBGLUM1NjItNDI5MC04NDc5LUQ4MTVFREFEODlENiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYzOWIwNWUwMTgzMDAyYjkzYWZkZGU0NyIsImdyb3VwcyI6WyJjb25zb2xlX2NtcyIsIm1hcmtldHBsYWNlX2NtcyJdLCJlbWFpbCI6ImRhdmlkZS5jYWxhYnJvQG1pYS1wbGF0Zm9ybS5ldSIsIm5hbWUiOiJEYXZpZGUgQ2FsYWJyw7IiLCJ1c2VyU2V0dGluZ3NVUkwiOiJodHRwczovL2xvZ2luLm1pYS1wbGF0Zm9ybS5ldS9lbmR1c2VyL3NldHRpbmdzIn0sImlzcyI6ImNvbnNvbGUiLCJzdWIiOiI2MzliMDVlMDE4MzAwMmI5M2FmZGRlNDciLCJleHAiOjE3MTY0NTc5NjQsImlhdCI6MTcxNjM3MTU2NCwianRpIjoiNjgyN2E5MWEtOWNlNi00OTYzLWJmNDQtOGEyMWFmYTNjN2I5In0.SpkBGmhSErcAAbkb_SNVaCaAXFuuWJFi5HIZnPJDOOAe9kkyBK0okeXNwTQ-pUEvygaVBf_mASwrEEQclLB0u67O8x_DAwJSrl3MM3foa0h3_Hs9_tOaucHQiFoNb1aUqjwRUMnij7okarvqLhsOAnXB8Ccu3JnGy1yvqoSQdrcLkXnKodicwBsOAbha7SJu80zZ2N0zZub0-vkNcx2B7xW1n3UX5tKlrd9Bs_sq1sjqRu2qsmDrPNzndnmj2bqHKDWHUOe2Jcl5NsfqEIMGcDL6zzuLq62d0k6YVQkBSxAaPY-ki94YeMx0Eq_marfm8echyGY8YnZ_nAJJ2C_Qg3IruikAHTUhe9b8LOWMxVnjvoW1tQJKConYypwU7Yj4RCLbNz1MWV7ury07ZqxO3CNiSVajIK1Vcg2HxDHHJ_LJM8wWrxG7eOrtepRoVScIZ-8zZFkAY7H9aI3xOU3ERRDYg8ojg6DdQHAI8fZn_SJlBfky5XA53xPM5VZsU61HIuOzDH5AmYg0VhwvhWekL4-WvWfJeTZW6OmjoeKkvSVtUOqwo6RwPieFOFcgLXPnpSATpa6Eq_cRggWYo4A3DjAzR1eCM4OAArDHDUSWhXdqnek7M54up4DtG69_XEaWmuxXUMD0SJ5qI6-uYtIkqezzWzvt8aXtePtyEgAnLXo; refresh_token=RyLFoKqMQgyPsfnEDKwilbGruXVbpuNAGgdOHJtQvghzxOWRWGSKud'
        }
    }

    try {
        const response = await axios.put(url, body, opts)    
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

async function get_extension(basePath, tenantId) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, 'extensions')
    const opts = {
        headers: {
            Cookie: '_ga=GA1.1.1716687654.1714987124; _hjSessionUser_1768116=eyJpZCI6IjA5MTFjMGI2LTAzZTktNThjMC04YTJkLTg4ZTdlOGI1OWUyNyIsImNyZWF0ZWQiOjE3MTQ5ODk2MTQzNzgsImV4aXN0aW5nIjp0cnVlfQ==; hubspotutk=f3e79620d86e1eff7cd373d776c01e84; __hssrc=1; technicalCookies=enabled; performanceCookies=enabled; profilingCookies=enabled; _ga_GNTKDDJB0H=GS1.1.1716371000.29.1.1716371016.0.0.0; _hjSession_1768116=eyJpZCI6ImI0NThlYzE3LTE3MTUtNDkyMC1hM2MyLTYzZTVlOWU1MjMzYiIsImMiOjE3MTYzNzExNDA5MTksInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; __hstc=96381635.f3e79620d86e1eff7cd373d776c01e84.1714989614538.1716367604841.1716371141522.25; __hssc=96381635.2.1716371141522; _ga_V2F5JZXRR0=GS1.1.1716371136.25.1.1716371464.0.0.0; sid=eyJhbGciOiJSUzI1NiIsImtpZCI6IkVEQzI1MDBGLUM1NjItNDI5MC04NDc5LUQ4MTVFREFEODlENiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYzOWIwNWUwMTgzMDAyYjkzYWZkZGU0NyIsImdyb3VwcyI6WyJjb25zb2xlX2NtcyIsIm1hcmtldHBsYWNlX2NtcyJdLCJlbWFpbCI6ImRhdmlkZS5jYWxhYnJvQG1pYS1wbGF0Zm9ybS5ldSIsIm5hbWUiOiJEYXZpZGUgQ2FsYWJyw7IiLCJ1c2VyU2V0dGluZ3NVUkwiOiJodHRwczovL2xvZ2luLm1pYS1wbGF0Zm9ybS5ldS9lbmR1c2VyL3NldHRpbmdzIn0sImlzcyI6ImNvbnNvbGUiLCJzdWIiOiI2MzliMDVlMDE4MzAwMmI5M2FmZGRlNDciLCJleHAiOjE3MTY0NTc5NjQsImlhdCI6MTcxNjM3MTU2NCwianRpIjoiNjgyN2E5MWEtOWNlNi00OTYzLWJmNDQtOGEyMWFmYTNjN2I5In0.SpkBGmhSErcAAbkb_SNVaCaAXFuuWJFi5HIZnPJDOOAe9kkyBK0okeXNwTQ-pUEvygaVBf_mASwrEEQclLB0u67O8x_DAwJSrl3MM3foa0h3_Hs9_tOaucHQiFoNb1aUqjwRUMnij7okarvqLhsOAnXB8Ccu3JnGy1yvqoSQdrcLkXnKodicwBsOAbha7SJu80zZ2N0zZub0-vkNcx2B7xW1n3UX5tKlrd9Bs_sq1sjqRu2qsmDrPNzndnmj2bqHKDWHUOe2Jcl5NsfqEIMGcDL6zzuLq62d0k6YVQkBSxAaPY-ki94YeMx0Eq_marfm8echyGY8YnZ_nAJJ2C_Qg3IruikAHTUhe9b8LOWMxVnjvoW1tQJKConYypwU7Yj4RCLbNz1MWV7ury07ZqxO3CNiSVajIK1Vcg2HxDHHJ_LJM8wWrxG7eOrtepRoVScIZ-8zZFkAY7H9aI3xOU3ERRDYg8ojg6DdQHAI8fZn_SJlBfky5XA53xPM5VZsU61HIuOzDH5AmYg0VhwvhWekL4-WvWfJeTZW6OmjoeKkvSVtUOqwo6RwPieFOFcgLXPnpSATpa6Eq_cRggWYo4A3DjAzR1eCM4OAArDHDUSWhXdqnek7M54up4DtG69_XEaWmuxXUMD0SJ5qI6-uYtIkqezzWzvt8aXtePtyEgAnLXo; refresh_token=RyLFoKqMQgyPsfnEDKwilbGruXVbpuNAGgdOHJtQvghzxOWRWGSKud'
        }
    }

    const response = await axios.get(url, opts)
    return response.data
}

async function activate_extension() {

}

async function registerQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'basePath',
            message: 'Enter Mia-Platform Console base path:',
        },
        {
            type: 'input',
            name: 'tenantId',
            message: 'Enter tenantId:',
        },
        {
            type: 'checkbox',
            name: 'contexts',
            message: 'Which are the contexts?',
            choices: ['company', 'project']
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description:',
        },
        {
            type: 'input',
            name: 'entry',
            message: 'Enter the entry URL:',
        },
        {
            type: 'list',
            name: 'extensionType',
            message: 'Select the exension type:',
            choices: ['iframe']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name:',
        },
        {
            type: 'input',
            name: 'routes[0].destinationPath',
            message: 'Enter the destination path for the route:',
        },
        {
            type: 'input',
            name: 'routes[0].icon.name',
            message: 'Enter the icon name for the route:',
            default: 'PiProjectorScreenChartLight'
        },
        {
            type: 'input',
            name: 'routes[0].id',
            message: 'Enter the route ID:',
            default: 'p4samd-home'
        },
        {
            type: 'input',
            name: 'routes[0].labelIntl.en',
            message: 'Enter the label in English:',
        },
        {
            type: 'input',
            name: 'routes[0].labelIntl.it',
            message: 'Enter the label in Italian:',
        },
        {
            type: 'list',
            name: 'routes[0].locationId',
            message: 'Enter the location ID:',
            choices: ['company', 'project']
        },
        {
            type: 'input',
            name: 'routes[0].parentId',
            message: 'Enter the parent ID:',
        }
    ]

    return await inquirer.prompt(questions)
}

async function retrieveQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'basePath',
            message: 'Enter Mia-Platform Console base path:',
        },
        {
            type: 'input',
            name: 'tenantId',
            message: 'Enter tenantId:',
        }
    ]

    return await inquirer.prompt(questions)
}

async function activateQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'basePath',
            message: 'Enter Mia-Platform Console base path:',
        },
        {
            type: 'input',
            name: 'tenantId',
            message: 'Enter tenantId:',
        }
    ]

    const { basePath, tenantId } = await inquirer.prompt(questions)
    const extensions = get_extension(basePath, tenantId)
    
}

module.exports = {
    register_extension,
    activate_extension,
    get_extension,
    registerQuestions,
    retrieveQuestions
}