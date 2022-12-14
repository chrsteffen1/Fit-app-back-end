import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.put('/:id/goals/:goalId', checkAuth, profilesCtrl.updateGoal)
router.post('/:id/goals', checkAuth, profilesCtrl.createGoal)
router.post('/:id/exercises', profilesCtrl.addExercise)
router.post('/:id/meals', profilesCtrl.addMeal)
router.delete('/:id/goals/:goalId', checkAuth, profilesCtrl.deleteGoal)
router.delete('/:id/exercises/:exerciseId', checkAuth, profilesCtrl.deleteExercise)
router.delete('/:id/meals/:mealId', checkAuth, profilesCtrl.deleteMeal)


export { router }
