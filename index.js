const { Command } = require('commander')
const program = new Command()

const { registerQuestions, register_extension, get_extension, retrieveQuestions } = require('./Extender')

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


program.parse(process.argv)