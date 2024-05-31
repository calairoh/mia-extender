const path = require('path')
const axios = require('axios')
const inquirer = require('inquirer')

async function register_extension(basePath, tenantId, body) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, '/extensions')

    const opts = {
        headers: {
            Cookie: process.env.COOKIE,
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
            Cookie: process.env.COOKIE,
        }
    }

    const response = await axios.get(url, opts)
    return response.data
}

async function activate_extension(basePath, tenantId, extensionId) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, '/extensions', extensionId, 'activation')

    const body = {
        contextType: 'company',
        contextId: tenantId,
        overrides: []
    }
    const opts = {
        headers: {
            Cookie: process.env.COOKIE,
        }
    }

    try {
        const response = await axios.post(url, body, opts)    
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
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
    const extensions = await get_extension(basePath, tenantId)
    console.log(extensions)
    const extensionIdQuestion = [
        {
            type: 'list',
            name: 'extension',
            message: 'Select the identifier of the extension to active:',
            choices: extensions.map(ext => ext.extensionId)
        }
    ]

    const { extension } = await inquirer.prompt(extensionIdQuestion)
    return { basePath, tenantId, extension }
}

module.exports = {
    register_extension,
    activate_extension,
    get_extension,
    registerQuestions,
    retrieveQuestions,
    activateQuestions
}