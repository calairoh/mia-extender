const { Command } = require('commander')
const program = new Command()

const { registerQuestions, register_extension, get_extension, retrieveQuestions, activate_extension, delete_extension, selectExtensionQuestions } = require('./Extender')

program
    .name('mec')
    .description('Mia-Extender CLI')
    .version('0.1.0')

program
    .command('register')
    .description('Register new extension')
    .action(async () => {
        const questions = await registerQuestions()
        const { basePath, tenantId, ...body } = questions
        await register_extension(basePath, tenantId, body)
    })

program
    .command('retrieve')
    .description('Get tenant extensions')
    .action(async () => {
        const questions = await retrieveQuestions()
        const { basePath, tenantId } = questions
        const response = await get_extension(basePath, tenantId)
        console.log(response)
    })

program
    .command('activate')
    .description('Activate tenant extension')
    .action(async () => {
        const questions = await selectExtensionQuestions()
        const { basePath, tenantId, extension } = questions
        const response = await activate_extension(basePath, tenantId, extension)
        console.log(response)
    })

program
    .command('delete')
    .description('Delete an extension')
    .action(async () => {
        const questions = await selectExtensionQuestions()
        const { basePath, tenantId, extension } = questions
        const response = await delete_extension(basePath, tenantId, extension)
        console.log(response)
    })



program.parse(process.argv)