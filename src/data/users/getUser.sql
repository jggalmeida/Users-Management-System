SELECT [Id],
        [UserId],
        [Email],
        [Name],
        [Department],
        [EnteredOn],
        [LastUpdate],
        [SecurityLevel]
FROM    [dbo].[users]
WHERE   [Id] = @Id
ORDER BY
        [EnteredOn]